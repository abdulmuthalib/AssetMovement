create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  full_name text not null,
  phone text,
  address text,
  role text not null default 'member' check (role in ('member', 'staff', 'admin')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.asset_types (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.assets (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  asset_type_id uuid references public.asset_types(id),
  serial_number text not null unique,
  condition text not null default 'Good' check (condition in ('New', 'Good', 'Fair', 'Needs Repair')),
  quantity integer not null default 1,
  unit_cost numeric(12,2) default 0,
  caution_deposit numeric(12,2) default 0,
  status text not null default 'Available' check (status in ('Available', 'In Use', 'Maintenance', 'Inactive')),
  description text,
  manufacturer text,
  purchase_date date,
  warranty_expiry date,
  photo_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.asset_requests (
  id uuid primary key default gen_random_uuid(),
  requested_by uuid references public.profiles(id),
  asset_id uuid references public.assets(id),
  quantity integer not null default 1,
  duration_days integer not null,
  purpose text,
  status text not null default 'Submitted' check (status in ('Submitted', 'Approved', 'Rejected', 'Assigned', 'In Use', 'Return Requested', 'Returned', 'Cancelled', 'Damaged')),
  caution_acknowledged boolean not null default false,
  terms_accepted boolean not null default false,
  expected_return_date date,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.asset_assignments (
  id uuid primary key default gen_random_uuid(),
  request_id uuid references public.asset_requests(id),
  asset_id uuid references public.assets(id),
  assigned_to uuid references public.profiles(id),
  assigned_at timestamptz not null default now(),
  expected_return_date date,
  status text not null default 'Assigned' check (status in ('Assigned', 'In Use', 'Returned'))
);

create table if not exists public.asset_returns (
  id uuid primary key default gen_random_uuid(),
  assignment_id uuid references public.asset_assignments(id),
  member_id uuid references public.profiles(id),
  return_date date,
  condition text default 'Good' check (condition in ('Same Condition', 'Excellent', 'Good', 'Fair', 'Damaged')),
  damage_description text,
  status text not null default 'Pending Acceptance' check (status in ('Pending Acceptance', 'Accepted', 'Quality Issue', 'Charge Applied', 'Refund Processed', 'Completed')),
  created_at timestamptz not null default now()
);

create table if not exists public.caution_deposits (
  id uuid primary key default gen_random_uuid(),
  member_id uuid references public.profiles(id),
  request_id uuid references public.asset_requests(id),
  amount numeric(12,2) not null default 0,
  collected_at timestamptz,
  refunded_at timestamptz,
  status text not null default 'Collected' check (status in ('Collected', 'Pending', 'Refunded', 'Outstanding'))
);

create table if not exists public.audit_logs (
  id uuid primary key default gen_random_uuid(),
  action text not null,
  entity_type text not null,
  entity_id uuid,
  actor_id uuid references public.profiles(id),
  details jsonb default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists public.notifications (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles(id),
  title text not null,
  message text not null,
  read_at timestamptz,
  created_at timestamptz not null default now()
);
