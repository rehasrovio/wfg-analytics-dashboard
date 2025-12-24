# WFG Analytics Dashboard

A modern React + TypeScript analytics dashboard for displaying call analytics with editable charts and Supabase persistence.

## 🚀 Features

- **Three Analytics Charts**:
  - Calls Per Day (Bar Chart)
  - Success vs Failure (Pie Chart)
  - Average Call Duration (Line Chart)

- **Editable Charts**: Users can modify chart values with persistence
- **Email-Based Identification**: Simple email gate for user identification (no authentication)
- **Supabase Integration**: Automatic data persistence and retrieval
- **Modern Design**: Built with SuperBryn Design System for a clean, professional look
- **Responsive**: Works seamlessly on desktop and mobile devices

## 📋 Tech Stack

- **React 19.2.0** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Recharts** - Chart visualization library
- **Supabase** - Backend-as-a-Service for data persistence
- **SuperBryn Design System** - Consistent styling and UI components

## 🛠️ Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Supabase account (free tier is sufficient)

## 📦 Installation

1. **Clone the repository** (or navigate to the project directory)

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up Supabase**:
   - Create a project at [supabase.com](https://supabase.com)
   - Run this SQL in the Supabase SQL Editor:
     ```sql
     CREATE TABLE user_chart_data (
       email TEXT PRIMARY KEY,
       chart_values JSONB NOT NULL,
       updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
     );

     ALTER TABLE user_chart_data ENABLE ROW LEVEL SECURITY;

     CREATE POLICY "Allow all operations" ON user_chart_data
       FOR ALL
       USING (true)
       WITH CHECK (true);
     ```

4. **Configure environment variables**:
   - Copy `.env.example` to `.env` (if it exists) or create a new `.env` file
   - Add your Supabase credentials:
     ```env
     VITE_SUPABASE_URL=your_supabase_project_url
     VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
     ```
   - Get these values from: Supabase Dashboard → Settings → API

5. **Start the development server**:
   ```bash
   npm run dev
   ```

6. **Open your browser**:
   - Navigate to `http://localhost:5173` (or the port shown in terminal)

## 🎯 Usage

### Viewing Charts

The dashboard displays three charts with dummy data by default:
- **Calls Per Day**: Bar chart showing daily call volume
- **Success vs Failure**: Pie chart showing success and failure rates
- **Average Call Duration**: Line chart showing average call duration over time

### Editing Chart Values

1. Click the **"Edit Values"** button on any chart
2. If this is your first time, enter your email address
3. If you have previous data, you'll see a confirmation to overwrite
4. Modify the values in the edit modal
5. Click **"Save Changes"**
6. The chart will update immediately and your data will be saved to Supabase

### Data Persistence

- Your email is stored in browser localStorage
- Chart data is saved to Supabase and associated with your email
- On subsequent visits, your saved data will be loaded automatically

## 📁 Project Structure

```
src/
├── components/
│   ├── charts/
│   │   ├── CallsPerDayChart.tsx
│   │   ├── SuccessVsFailureChart.tsx
│   │   ├── AvgCallDurationChart.tsx
│   │   └── ChartCard.css
│   ├── modals/
│   │   ├── EmailModal.tsx
│   │   ├── EmailModal.css
│   │   ├── EditChartModal.tsx
│   │   └── EditChartModal.css
│   ├── Dashboard.tsx
│   └── Dashboard.css
├── services/
│   └── supabase.ts
├── types/
│   └── index.ts
├── App.tsx
├── main.tsx
└── index.css
```

## 🎨 Design System

This project uses the **SuperBryn Design System** for consistent styling. See `INSTRUCTIONS.md` for detailed information on:

- Using CSS variables and utility classes
- Color palette and typography
- Component patterns and best practices

Key design system files:
- `superbryn-design-system.css` - Complete CSS implementation
- `DESIGN_SYSTEM.md` - Design system documentation

## 🚢 Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

Preview the production build:
```bash
npm run preview
```

## 🌐 Deployment to Vercel

### Option 1: Deploy via Vercel Dashboard

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
3. Click **"Add New Project"**
4. Import your repository
5. Configure:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Add environment variables:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
7. Click **"Deploy"**

### Option 2: Deploy via Vercel CLI

```bash
npm install -g vercel
vercel login
vercel
```

Follow the prompts and add environment variables when asked.

### Environment Variables in Vercel

1. Go to your project → Settings → Environment Variables
2. Add:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
3. Redeploy for changes to take effect

## 🧪 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Adding a New Chart

1. Create a new component in `src/components/charts/`
2. Use Recharts for visualization
3. Follow the design system for styling
4. Add edit functionality if needed
5. Integrate with Supabase for persistence

See `INSTRUCTIONS.md` for detailed examples.

## 🐛 Troubleshooting

### Supabase Connection Issues

- Verify environment variables are set correctly
- Check Supabase project is active (not paused)
- Verify RLS policies allow operations
- Check browser console for specific errors

### Charts Not Rendering

- Ensure Recharts is installed: `npm list recharts`
- Verify data format matches component expectations
- Check browser console for errors

### Environment Variables Not Working

- Ensure variables start with `VITE_` prefix
- Restart dev server after changing `.env`
- In production, verify variables in Vercel dashboard
- Use `import.meta.env.VITE_*` (not `process.env`)

For more troubleshooting tips, see `INSTRUCTIONS.md`.

## 📚 Additional Documentation

- **`INSTRUCTIONS.md`** - Comprehensive setup and development guide
- **`DESIGN_SYSTEM.md`** - Complete design system documentation

## 🔒 Security Notes

- No authentication is implemented (email is used as identifier only)
- Supabase RLS policies allow all operations (adjust for production)
- Environment variables should never be committed to version control
- Input validation is basic - enhance for production use

## 📝 License

This project is private and proprietary.

## 🙏 Acknowledgments

- Design system inspired by [SuperBryn.com](https://superbryn.com)
- Built with [Recharts](https://recharts.org/)
- Powered by [Supabase](https://supabase.com)
- Deployed on [Vercel](https://vercel.com)

---