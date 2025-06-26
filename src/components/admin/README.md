# Admin Components

This folder contains all the UI components for the admin dashboard of the cinema application.

## Structure

```
src/components/admin/
├── index.ts                    # Main exports file
├── AdminLayout.tsx            # Main layout component with sidebar
├── AdminSidebar.tsx          # Sidebar navigation component
├── StatsCard.tsx             # Reusable stats card component
├── ActivityFeed.tsx          # Activity feed component
├── dashboard/
│   └── DashboardOverview.tsx # Main dashboard page component
├── movies/
│   └── MoviesList.tsx        # Movies management component
└── users/                    # (for future user management components)
```

## Components Overview

### AdminLayout

The main layout component that wraps all admin pages. It includes:

- Sidebar with navigation
- Header with sidebar trigger
- Main content area

### AdminSidebar

Navigation sidebar with the following sections:

- **Management**: Dashboard, Movies, Users, Bookings, Showtimes, Reviews
- **Analytics**: Analytics, Reports
- **System**: Staff Management, Settings

### StatsCard

Reusable component for displaying statistics with:

- Title
- Value (number or string)
- Change indicator with color coding

### ActivityFeed

Component for displaying recent activities with:

- Activity message
- Timestamp
- Status indicator (info, success, warning, error)

## Usage

### Basic Admin Page

```tsx
import { AdminLayout } from "@/components/admin";

export default function AdminPage() {
  return <AdminLayout>{/* Your admin content here */}</AdminLayout>;
}
```

### Using Dashboard Components

```tsx
import { AdminLayout } from "@/components/admin";
import { DashboardOverview } from "@/components/admin/dashboard/DashboardOverview";

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <DashboardOverview />
    </AdminLayout>
  );
}
```

### Custom Stats Display

```tsx
import { StatsCard } from "@/components/admin";

<StatsCard
  title="Total Revenue"
  value="$25,000"
  change="+12% from last month"
  changeType="positive"
/>;
```

## Features

- **Responsive Design**: Works on desktop and mobile devices
- **Collapsible Sidebar**: Can be toggled for more screen space
- **Keyboard Shortcuts**: Ctrl/Cmd + B to toggle sidebar
- **Theme Support**: Uses your application's theme system
- **Accessibility**: Proper ARIA labels and focus management

## Navigation Items

The sidebar includes navigation to:

- `/admin` - Dashboard
- `/admin/movies` - Movies management
- `/admin/users` - User management
- `/admin/bookings` - Booking management
- `/admin/showtimes` - Showtime management
- `/admin/reviews` - Reviews management
- `/admin/analytics` - Analytics dashboard
- `/admin/reports` - Reports
- `/admin/staff` - Staff management
- `/admin/settings` - System settings
