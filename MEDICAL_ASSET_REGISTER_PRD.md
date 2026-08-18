# Product Requirements Document (PRD)
## Medical Equipment Asset Movement Register

**Version:** 1.0  
**Date:** August 2026  
**Organization:** Non-Profit Organization  
**Status:** Draft - Ready for Development

---

## Executive Summary

The Medical Equipment Asset Movement Register is a comprehensive web-based system designed to manage the lifecycle of medical equipment assets within a Non-Profit Organization. The system enables members/beneficiaries and staff to request equipment, streamlines the approval process for administrators, tracks equipment movement, manages caution deposits, and provides detailed reporting for organizational insights.

---

## 1. Business Overview

### 1.1 Problem Statement
The NPO currently lacks a centralized system to:
- Track medical equipment assets and their movement
- Manage equipment requests from members and staff
- Streamline the approval process for equipment distribution
- Monitor equipment returns and availability
- Manage caution deposits for equipment safety
- Generate reports on asset utilization and movement
- Current stock is with whom and movement history of an item and Member request history report

### 1.2 Business Objectives
1. Establish centralized control over medical equipment distribution
2. Enable transparent equipment request and approval workflow
3. Track equipment movement from issuance to return
4. Maintain accurate asset inventory and status
5. Generate actionable reports for organizational decision-making
6. Ensure equipment safety through caution deposit collection
7. Reduce manual paperwork and administrative overhead
8. NPO has set policy/strategy to give back to its members by giving medical equipment free of cost

### 1.3 Target Users
- **Members/Beneficiaries**: Can request medical equipment
- **Staff Members**: Can request equipment and manage their inventory
- **Admin/Managers**: Approve requests, manage returns, generate reports
- **Organization Leadership**: View comprehensive dashboards and analytics

### 1.4 Key Assumptions
- NPO has minimum 50-500 equipment items across multiple asset types
- Members and staff can access the system via web browsers
- Internet connectivity is available during business hours
- Equipment is free of cost; caution deposits only collected for safety purposes
- Admin team will review and approve requests within 2-4 hours, sprint2 (once the member paid the caution deposit admin will approve)
---

## 2. Detailed Feature Requirements
 - Dark mode to implement on whole pages with one click
 - page design has to be unique and applicable to all page
 - all the list in pages to implement per column sorting, pagination and filtering
 - encourage guest to become member on public page
 - all the list to implement export to PDF,CSV with full row, no first 1000 records count
 - maximum drop down values to be configurable thru database, no code hard cording

### 2.1 PAGE 1: Medical Equipment Asset Master

**Purpose**: Centralized management of all medical equipment assets  
**Access Level**: Admin/Manager only

#### 2.1.1 Asset Management - CRUD Operations

**Create Asset:**
- Form to add new medical equipment
- Fields Required:
  - **Asset Name** (Text) - Equipment name (e.g., "Wheelchair", "Oxygen Concentrator")
  - **Asset Type** (Dropdown) - Category classification
    - Mobility Aids (Wheelchairs, Crutches, Walkers)
    - Respiratory Equipment (Oxygen concentrators, Nebulizers)
    - Diagnostic Equipment (BP Monitor, Thermometer)
    - Mobility Support (Stretchers, Beds)
    - Other Equipment
  - **Asset Photo** (Image Upload) - Equipment image/thumbnail
    - Max file size: 5MB
    - Supported formats: JPG, PNG
  - **Asset Cost** (Number) - Original purchase cost for tracking
  - **Asset Charge to Customer** (Text/Dropdown) - Free of Cost (not always)
  - **Caution Deposit Amount** (Number) - Amount to be collected (optional, configurable per asset type)
  - **Description** (Text Area) - Detailed equipment description
  - **Condition** (Dropdown) - New, Good, Fair, Needs Repair
  - **Serial Number/ID** (Text) - Unique identifier for tracking
  - **Quantity** (Number) - Number of same asset available
  - **Manufacturer** (Text) - Equipment manufacturer
  - **Purchase Date** (Date) - When asset was purchased
  - **Warranty Expiry** (Date) - Warranty end date

**Read/List Assets:**
- Paginated table view of all assets
- Search functionality by:
  - Asset Name
  - Asset Type
  - Serial Number
- Filters:
  - By Asset Type
  - By Condition (New, Good, Fair, Needs Repair)
  - By Availability (Available, In Use, Maintenance)
- Display Columns:
  - Asset Photo (thumbnail)
  - Asset Name
  - Asset Type
  - Serial Number
  - Current Quantity
  - Status (Available/In Use/Under Maintenance)
  - Caution Deposit Amount
  - Actions (Edit, Delete, View Details)

**Update Asset:**
- Edit form with all creation fields
- Track who updated and when (audit trail)
- Prevent editing if asset is currently assigned to member
- Warning notification if updating asset in use

**Delete Asset:**
- Soft delete (mark as inactive)
- Prevent deletion if asset is currently assigned
- Maintain audit log of deletion

#### 2.1.2 Asset Details View
- Complete asset information display
- Movement history (which member has it, when, status)
- Current availability status
- Maintenance history
- Photo gallery
- Notes/Comments section

#### 2.1.3 Bulk Operations
- Import assets via CSV
- Export asset list to Excel/CSV
- Bulk status update

---

### 2.2 PAGE 2: Asset Request

**Purpose**: Enable members and staff to request medical equipment  
**Access Level**: Members, Staff, Admin

#### 2.2.1 Request Form

**Request Creation Fields:**
- **Requestor Name** (Text) - Auto-populated from logged-in user
- **Requestor Email** (Text) - Auto-populated from user profile
- **Requestor Phone** (Text) - Auto-populated from user profile
- **Requestor Address** (Text Area) - Auto-populated, editable
- **Request Date** (Date) - Auto-populated current date
- **Asset Needed** (Dropdown) - List of available assets
  - Shows asset name, type, photo
  - Shows current availability quantity
- **Asset Quantity** (Number) - How many units needed (max = available quantity)
- **Duration of Need** (Dropdown)
  - 1 Week
  - 2 Weeks
  - 1 Month
  - 3 Months
  - 6 Months
  - 1 Year
  - Indefinite/Permanent
- **Purpose/Reason** (Text Area) - Why member needs the equipment
- **Expected Return Date** (Date) - When member plans to return (auto-calculated based on duration)
- **Special Requirements** (Text Area) - Any special handling or requirements
- **Caution Deposit Acknowledgment** (Checkbox)
  - "I understand I need to pay caution deposit of Rs. [Amount] for safety purposes"
  - Link to refund policy
- **Terms & Conditions** (Checkbox)
  - Equipment will be used for stated purpose only
  - Member is responsible for safekeeping
  - Loss/damage will be charged to member
- **Attachments** (Optional) - Medical prescription or supporting documents

#### 2.2.2 Request Status Tracking
- **Request Status Indicators:**
  - Submitted (Pending Admin Review)
  - Approved
  - Rejected
  - Assigned (Equipment assigned to member)
  - In Use
  - Return Requested
  - Returned
  - Cancelled
  - Damaged from Member

#### 2.2.3 Request Timeline
- Visual timeline of request lifecycle
- Status change history with timestamps
- Admin comments/notes visible to requestor

#### 2.2.4 Request Notifications
- **Email Notification**: When request is submitted
  - Confirmation of request received
  - Expected review timeline
- **In-App Notification**: When status changes
  - Approved/Rejected with reason
  - Asset assigned and ready for pickup
  - Reminder to return equipment

#### 2.2.5 Request Listing
- Member Dashboard showing their active requests, refresh periodically
- Filter by status (Pending, Approved, Rejected, In Use, Returned)
- Search by asset name or request date

#### 2.2.6 My Equipment Section (for Members)
- Currently assigned / un-assigned equipment
- Equipment assigned date
- Expected return date
- Option to initiate return request

---

### 2.3 PAGE 3: Asset Return Request

**Purpose**: Manage equipment returns and caution deposit refunds  
**Access Level**: Members, Staff, Admin

#### 2.3.1 Return Request Initiation
- Triggered by member or staff
- Fields:
  - **Return Request Date** (Date) - Auto-populated
  - **Asset Assigned** (Display Only) - Shows which asset to return
  - **Assignment Date** (Display Only) - When asset was assigned
  - **Days Held** (Display Only) - Calculated automatically
  - **Equipment Condition** (Dropdown)
    - Same Condition
    - Excellent (No damage)
    - Good (Minor wear, fully functional)
    - Fair (Visible damage, but functional)
    - Damaged (Non-functional, repair needed)
  - **Damage Description** (Text Area) - Describe any damage or issues
  - **Photos of Return Condition** (Multiple Upload) - Photo proof of equipment condition
  - **Return Notes** (Text Area) - Any additional comments
  - **Return Date** (Date) - When member returning equipment
  - **Return Location** (Dropdown/Address) - Where equipment will be returned

#### 2.3.2 Return Status Workflow
- **Pending Acceptance** - Awaiting admin inspection
- **Accepted** - Equipment received and inspected
- **Quality Issue** - Damage or issues found, member notification
- **Charge Applied** - If damage charge applies to member
- **Refund Processed** - Caution deposit returned
- **Completed** - Return process complete


#### 2.3.3 Equipment Inspection (Admin View)
- Receive return notification
- Photo comparison (at assignment vs. return)
- Inspect equipment condition
- Mark damage/issues if any
- Calculate charges (if applicable)
- Process caution deposit refund

#### 2.3.4 Return Notifications
- **To Member:**
  - Email: Return request acknowledged
  - In-App: Status update when inspected
  - Email: Caution deposit refund confirmation
- **To Admin:**
  - In-App notification when return requested
  - Alert if damage found

#### 2.3.5 Return Pickup Scheduling
- Schedule return appointment
- Available pickup slots (admin manages slots)
- Calendar view for member to select pickup time
- Confirmation email with pickup details

---

### 2.4 PAGE 4: Admin Approval Dashboard

**Purpose**: Centralized approval and management of all requests  
**Access Level**: Admin/Managers only

#### 2.4.1 Approval Queue
**Pending Requests Section:**
- Table view of all pending asset requests
- Columns:
  - Requestor Name
  - Asset Requested
  - Quantity
  - Request Date
  - Duration
  - Status
  - Actions
- Sort options: By Date, By Priority, By Requestor
- Filter options: By Asset Type, By Duration, By Requestor Status

#### 2.4.2 Request Review Details
- Full request information display
- Requestor profile summary
- Requested asset details with photo
- Member's request history (previous requests)
- System recommendations (AI-based, if applicable)

#### 2.4.3 Approval/Rejection Actions
**Approve Request:**
- Set approval date
- Assign specific asset serial number/unit
- Set expected return date (confirm or modify)
- Add internal notes
- Send approval notification (Email + In-App)
- Auto-generate equipment assignment reference

**Reject Request:**
- Dropdown reason for rejection
  - Asset not available
  - Member eligibility issues
  - Request incomplete
  - Other (with text field)
- Add rejection message/comments
- Send rejection notification with reason
- Allow request revision/resubmission

#### 2.4.4 Return Requests Review
**Pending Return Section:**
- Table of all pending return requests
- Columns:
  - Member Name
  - Asset Returning
  - Assigned Date
  - Return Date
  - Current Status
  - Actions

**Return Inspection:**
- Compare photos (at assignment vs. return)
- Inspect condition report
- Approve return and process refund
- Flag damage and calculate charges
- Generate return receipt

#### 2.4.5 Caution Deposit Management
- Track caution deposit collection
- Track caution deposit refunds
- Generate deposit receipt
- Generate refund receipt
- Dashboard summary:
  - Total collected deposits
  - Pending refunds
  - Charges applied
  - Outstanding balances

#### 2.4.6 Admin Dashboard Summary
- Key Metrics Cards:
  - Total Requests (YTD)
  - Pending Approvals
  - Active Assignments
  - Pending Returns
  - Damage Claims
- Quick Actions:
  - View Pending Requests
  - View Pending Returns
  - View Equipment Inventory
- Recent Activity Timeline
- Equipment Status Overview

#### 2.4.7 Bulk Actions
- Bulk approve requests (select multiple)
- Bulk assign equipment

#### 2.4.8 Audit Trail
- Log all approvals/rejections
- Track who approved/rejected and when
- Track all equipment movements
- Track caution deposit transactions

---

### 2.5 PAGE 5: Dashboard

**Purpose**: High-level overview of system status and analytics  
**Access Level**: Different views for Members, Staff, and Admin

#### 2.5.1 Member/Staff Dashboard
**My Equipment Section:**
- Card view of currently assigned equipment
  - Asset photo
  - Asset name
  - Assigned date
  - Expected return date
  - Days remaining
  - Quick action: "Request Return"

**My Requests Section:**
- Status of pending/active requests
- Cards showing:
  - Requested asset
  - Status (Pending, Approved, In Use, etc.)
  - Request date
  - Expected approval/delivery

**Quick Actions:**
- New Equipment Request button
- View Equipment Catalog
- My Profile

**Alerts/Notifications:**
- Equipment return reminders (7 days before due date)
- Request status updates
- Equipment maintenance notice (if maintenance scheduled)

#### 2.5.2 Admin Dashboard

**Overview Cards (KPIs):**
1. Total Equipment Assets
   - Count of total assets
   - Trend (↑ or ↓)
   
2. Equipment Availability
   - Available units
   - In-use units
   - Under maintenance
   - % utilization

3. Total Requests (This Month)
   - Count with trend
   - Breakdown: Approved/Pending/Rejected

4. Pending Approvals
   - Count requiring action
   - Urgent badge if >24hrs old

5. Active Assignments
   - Number of currently assigned equipment
   - Overdue returns count

6. Pending Returns
   - Equipment awaiting return inspection
   - Overdue returns alert

7. Caution Deposits
   - Total collected
   - Pending refunds
   - Outstanding balances

**Charts & Visualizations:**

1. **Equipment Utilization Chart** (Line/Area Chart)
   - Timeline: Last 30 days
   - Y-axis: Number of assignments
   - Shows trend of equipment usage

2. **Asset Type Distribution** (Pie/Donut Chart)
   - Breakdown by asset type
   - Hover shows count

3. **Request Status Breakdown** (Bar Chart)
   - Approved vs Rejected vs Pending
   - Last 30 days
   - Clickable to filter detailed view

4. **Top Requested Assets** (Horizontal Bar Chart)
   - Most frequently requested equipment
   - Last 30 days

5. **Member/Staff Request Volume** (Table)
   - Top requestors
   - Total requests from each member
   - Active assignments count

**Recent Activity Section:**
- Timeline of recent actions
- Approvals
- Returns
- Assignments
- Damage claims

**Quick Access Links:**
- Pending Approvals
- Equipment Inventory
- Members Management
- Generate Report

#### 2.5.3 Dashboard Filters
- Date range selector (Last 7 days, 30 days, 90 days, Custom)
- Asset type filter
- Status filter
- Member/staff filter

#### 2.5.4 Export Options
- Export dashboard data to PDF and CSV on all the pages, where list is visible
- Schedule automated dashboard reports via email ( on sprint 2 )

---

### 2.6 PAGE 6: Reports

**Purpose**: Comprehensive reporting and analytics for organizational insights  
**Access Level**: Admin/Managers, Organization Leadership

#### 2.6.1 Report Types

**1. Asset Movement Report**
- **Purpose**: Track equipment movement history
- **Filters:**
  - Date Range (Custom/Preset: Last 30 days, 90 days, etc.)
  - Asset Type
  - Specific Asset
  - Member/Requestor
  - Status

- **Report Data (Table):**
  - Asset Name & Type
  - Assigned To (Member/Staff)
  - Assignment Date
  - Return Date
  - Duration (in days)
  - Equipment Condition at Return
  - Damage Charges (if any)
  - Caution Deposit Amount
  - Refund Status

- **Visualization:**
  - Movement timeline
  - Asset utilization heatmap
  - Geographic distribution (if applicable)

- **Export:** Excel, PDF, CSV

**2. Asset Utilization Report**
- **Purpose**: Analyze which assets are most/least utilized
- **Filters:**
  - Date Range
  - Asset Type
  - Status Filter (Active, Inactive, Maintenance)

- **Report Metrics:**
  - Total Assets by Type
  - Currently In Use Count
  - Available Count
  - % Utilization Rate
  - Average Days Per Assignment
  - Total Assignments (Last 30/90 days)

- **Asset Details Table:**
  - Asset Name
  - Type
  - Times Assigned (Period)
  - Current Status
  - Last Used Date
  - Maintenance Due

- **Visualization:**
  - Utilization % bar chart
  - Asset idle time comparison
  - Demand vs. supply analysis

- **Export:** Excel, PDF, CSV

**3. Financial Report** (Caution Deposit & Charges)
- **Purpose**: Track financial transactions related to equipment
- **Filters:**
  - Date Range
  - Deposit Status (Collected, Pending, Refunded)
  - Charge Status (Claimed, Paid, Pending)
  - Member/Requestor

- **Report Sections:**

  **A. Caution Deposit Summary:**
  - Total Deposits Collected
  - Deposits Pending Collection
  - Deposits Refunded
  - Outstanding Deposits (Not Yet Returned)
  - Net Amount (Collected - Refunded)

  **B. Deposit Transaction Details (Table):**
  - Date
  - Member Name
  - Asset
  - Deposit Amount
  - Date Collected
  - Refund Date
  - Refund Amount
  - Status

  **C. Damage Charges Summary:**
  - Total Damage Claims
  - Damage Charges Applied
  - Charges Collected
  - Charges Outstanding
  - Charges Waived

  **D. Charge Transaction Details (Table):**
  - Date
  - Member Name
  - Asset
  - Damage Description
  - Charge Amount
  - Status
  - Payment Date
  - Notes

- **Financial Chart:**
  - Deposits vs. Refunds (comparison)
  - Charges collected timeline
  - Monthly financial summary

- **Export:** Excel, PDF, CSV

**4. Member/Staff Activity Report**
- **Purpose**: Track individual member/staff request and usage patterns
- **Filters:**
  - Date Range
  - Member/Staff Name/ID
  - Request Status
  - Asset Type

- **Report Data:**
  - Total Requests Made
  - Approved Requests
  - Rejected Requests
  - Pending Requests
  - Currently Assigned Assets (Count)
  - Total Days Equipment Held
  - Damage Claims Count
  - Damage Charges Amount
  - Caution Deposits Paid
  - Refunds Received

- **Activity Timeline:**
  - Request history (chronological)
  - Status changes
  - Return dates met/missed

- **Member Scorecard:**
  - Compliance score (On-time returns, equipment care)
  - Risk level (High/Medium/Low based on damage history)

- **Export:** Excel, PDF, CSV

**5. Request Processing Report**
- **Purpose**: Analyze request approval and processing efficiency
- **Filters:**
  - Date Range
  - Request Status (All, Approved, Rejected, Pending)
  - Asset Type
  - Processing Time Range

- **Report Metrics:**
  - Total Requests Received
  - Approved Count & %
  - Rejected Count & %
  - Pending Count & %
  - Average Processing Time (Pending to Approval)
  - Fastest Processing Time
  - Slowest Processing Time
  - Median Processing Time

- **Rejection Analysis:**
  - Rejection Reasons Breakdown
  - Most Common Reason
  - Rejection Rate %

- **Trend Analysis:**
  - Requests over time (line chart)
  - Approval rate trend
  - Processing time trend

- **Export:** Excel, PDF, CSV

**6. Equipment Maintenance Report**
- **Purpose**: Track maintenance schedules and equipment condition
- **Filters:**
  - Date Range
  - Asset Type
  - Condition Status
  - Maintenance Status

- **Report Data:**
  - Equipment Requiring Maintenance
  - Maintenance History
  - Last Serviced Date
  - Next Service Due
  - Condition Assessment
  - Repair/Replacement Recommendations

- **Maintenance Schedule:**
  - Upcoming maintenance due
  - Overdue maintenance
  - Completed maintenance records

- **Export:** Excel, PDF, CSV

**7. Comparative Analysis Report**
- **Purpose**: Compare metrics across time periods
- **Filters:**
  - Time Period 1 (Date Range)
  - Time Period 2 (Date Range)
  - Asset Type
  - Member/Staff

- **Comparison Metrics:**
  - Requests comparison
  - Utilization comparison
  - Financial comparison
  - Processing time comparison
  - YoY/MoM trends

- **Visualization:**
  - Side-by-side comparisons
  - Trend indicators (↑↓ with %)
  - Growth/decline analysis

- **Export:** Excel, PDF, CSV

**8. Custom Report Builder**
- **Purpose**: Allow users to create custom reports
- **Features:**
  - Select metrics to include
  - Choose filters
  - Select date range
  - Choose visualization type
  - Save custom report template
  - Schedule automated report generation

#### 2.6.2 Report Features

**Report Customization:**
- Date range picker (with presets)
- Multi-select filters
- Column selection (choose which columns to display)
- Sort options
- Group by (Asset Type, Member, Status, etc.)

**Report Actions:**
- Download as PDF
- Download as Excel
- Download as CSV
- Print report
- Email report to stakeholders
- Schedule periodic report generation
- Save report as template

**Report Performance:**
- Data generation time < 5 seconds
- Support for reports covering 12+ months of data
- Real-time data or daily cache refresh

**Advanced Features:**
- Comparison with previous periods
- Trend analysis and predictions
- Anomaly detection (unusual patterns)
- Data drill-down (click metrics to see details)
- Comments/annotations on reports

---

## 3. Technical Requirements

### 3.1 Technology Stack (Recommended)
- **Frontend:** React.js, Next.js with Tailwind CSS
- **Backend:** Node.js/Express or Vercel Serverless Functions
- **Database:** PostgreSQL (via Supabase)
- **Authentication:** Supabase Auth or JWT-based
- **File Storage:** Supabase Storage or AWS S3
- **Email Service:** SendGrid or Nodemailer
- **Deployment:** Vercel or AWS EC2

### 3.2 Non-Functional Requirements

**Performance:**
- Page load time < 3 seconds
- API response time < 1 second
- Database query optimization for large datasets
- Image optimization and lazy loading

**Security:**
- HTTPS encryption
- Role-based access control (RBAC)
- Input validation and sanitization
- Protection against SQL injection
- RLS to enable
- CSRF token implementation
- Secure password storage (bcrypt hashing)
- Rate limiting on API endpoints
- Audit logging for all actions

**Reliability:**
- 99% uptime SLA
- Automated daily backups
- Disaster recovery plan
- Error logging and monitoring
- Graceful error handling

**Scalability:**
- Database can handle 10,000+ records
- Support for 500+ concurrent users
- Horizontal scalability ready
- CDN for static assets

### 3.3 Browser Compatibility
- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile, others)

### 3.4 Accessibility
- WCAG 2.1 AA compliance
- Screen reader compatibility
- Keyboard navigation support
- Adequate color contrast
- Responsive website, easy to migrate to mobile app

### 3.5 Data Privacy & Compliance
- GDPR compliance (if applicable)
- Data retention policies
- Privacy policy and terms of service
- Secure data deletion procedures

---

## 4. User Roles & Permissions

### 4.1 Member/Beneficiary Role
**Permissions:**
- ✓ Create asset request
- ✓ View own requests
- ✓ View assigned equipment
- ✓ Create return request
- ✓ View caution deposit status
- ✓ View own activity
- ✗ Approve/reject requests
- ✗ View other members' data
- ✗ Generate reports

### 4.2 Staff Role
**Permissions:**
- ✓ Create asset request
- ✓ View own requests
- ✓ View assigned equipment
- ✓ Create return request
- ✓ View caution deposit status
- ✓ View own activity
- ✓ View equipment inventory
- ✗ Approve/reject requests (may have limited viewing)
- ✗ Generate reports

### 4.3 Admin/Manager Role
**Permissions:**
- ✓ CRUD operations on assets
- ✓ View all requests
- ✓ Approve/reject requests
- ✓ Manage returns and inspections
- ✓ Generate all reports
- ✓ Manage user accounts
- ✓ View audit logs
- ✓ Configure system settings
- ✓ Manage caution deposits

### 4.4 Organization Leadership Role
**Permissions:**
- ✓ View all dashboards
- ✓ Generate reports
- ✓ View financial reports
- ✓ Export data
- ✗ Approve requests
- ✗ Manage user accounts
- ✗ CRUD operations

---

## 5. Integration Points

### 5.1 Email Notifications
- Request submission confirmation
- Approval/rejection notification
- Equipment return reminders
- Caution deposit refund notification
- Equipment damage charge notification

### 5.2 SMS Notifications (Future Enhancement)
- Critical alerts
- Return reminders
- Approval notifications

### 5.3 Third-Party Integrations
- Payment gateway (for caution deposit collection, if needed), on Sprint 2
- WhatsApp Business API (for SMS/messaging)
- Google Maps (for location selection)

---

## 6. Database Schema Overview

### Core Tables:
1. **users** - Member/Staff/Admin profiles
2. **assets** - Medical equipment master data
3. **asset_types** - Equipment type categories
4. **asset_requests** - Equipment requests
5. **asset_assignments** - Equipment assignment tracking
6. **asset_returns** - Equipment returns
7. **caution_deposits** - Deposit transactions
8. **damage_charges** - Damage claim tracking
9. **notifications** - System notifications
10. **audit_logs** - Action tracking

---

## 7. Deployment & Launch Plan

### Phase 1: Setup & Configuration (Week 1)
- Database design and creation
- API development
- Authentication setup

### Phase 2: Core Features Development (Weeks 2-4)
- Asset Master page
- Asset Request page
- Dashboard development

### Phase 3: Admin Features Development (Weeks 5-6)
- Admin approval dashboard
- Return request management
- Report development

### Phase 4: Testing & Refinement (Week 7)
- Unit testing
- Integration testing
- UAT with stakeholders

### Phase 5: Launch (Week 8)
- Production deployment
- User training, with video on all the pages
- Go-live

---

## 8. Success Metrics

1. **Adoption Rate**: 80%+ of eligible members/staff using system within 3 months
2. **Request Processing Time**: Reduce from current (manual) to <24 hours average
3. **Equipment Utilization**: Increase asset utilization by 30%
4. **Admin Efficiency**: Reduce admin time on request processing by 50%
5. **Data Accuracy**: 99%+ data accuracy in equipment tracking
6. **User Satisfaction**: 4.0+ average rating in user satisfaction survey
7. **System Uptime**: 99%+ uptime SLA
8. **Return Compliance**: 95%+ equipment returned on or before due date

---

## 9. Future Enhancements (Post-Launch)

1. **SMS Notifications** - Add SMS alerts for critical updates
2. **Mobile App** - Native iOS/Android application
3. **Equipment Tracking GPS** - Real-time location tracking for assets
4. **Preventive Maintenance** - Automated maintenance scheduling
5. **Equipment Shortage Alerts** - AI-based demand forecasting
6. **Self-Service Returns** - QR code-based return kiosks
7. **Equipment Rating System** - Member feedback on equipment
8. **Integration with Financial System** - Automatic deposit accounting
9. **Multi-Language Support** - Internationalization
10. **Advanced Analytics** - Machine learning insights

---

## 10. Assumptions & Constraints

### Assumptions:
- Users have basic computer literacy
- Internet connectivity is available during business hours
- NPO has dedicated admin staff for approval management
- Equipment photography is done during asset entry
- Caution deposit collection is optional per asset

### Constraints:
- Budget limitations
- Resource availability (development team size)
- Timeline (8-week delivery)
- Existing infrastructure compatibility
- Third-party service availability

---

## 11. Glossary

| Term | Definition |
|------|-----------|
| **Asset** | Medical equipment managed by the NPO |
| **Request** | Member's formal request to use an asset |
| **Assignment** | Approval and handover of asset to member |
| **Return** | Member returns equipment after use |
| **Caution Deposit** | Safety deposit collected from member |
| **Damage Charge** | Cost charged for equipment damage |
| **Utilization** | Percentage of time asset is in use |
| **Compliance** | Member's adherence to return schedules and equipment care |
| **Audit Trail** | Record of all system actions and changes |

---

## 12. Sign-Off

| Role | Name | Date | Signature |
|------|------|------|-----------|
| Product Manager | TBD | - | - |
| Stakeholder (NPO) | TBD | - | - |
| Tech Lead | TBD | - | - |

---

**Document Version Control:**
- v1.0 - Initial PRD (August 2026)
- Updates to be tracked here as document evolves

---

**End of PRD**
