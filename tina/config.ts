import { defineConfig, LocalAuthProvider } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "cms-integration";

// Check if we're in local development mode
const isLocal = process.env.TINA_PUBLIC_IS_LOCAL === 'true' || (!process.env.TINA_CLIENT_ID && !process.env.TINA_TOKEN);

export default defineConfig({
  branch,
  clientId: process.env.TINA_CLIENT_ID || null,
  token: process.env.TINA_TOKEN || null,
  // Use local auth provider for development
  authProvider: isLocal ? new LocalAuthProvider() : undefined,
  build: {
    outputFolder: "admin",
    publicFolder: "public",
    basePath: "admin",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "events",
        label: "Events",
        path: "src/content/events",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Event Title",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Event Date",
            required: true,
          },
          {
            type: "string",
            name: "location",
            label: "Location",
            required: true,
          },
          {
            type: "image",
            name: "image",
            label: "Featured Image",
          },
          {
            type: "string",
            name: "status",
            label: "Status",
            options: [
              { label: "Upcoming", value: "upcoming" },
              { label: "Past", value: "past" },
              { label: "Cancelled", value: "cancelled" },
            ],
            required: true,
          },
          {
            type: "rich-text",
            name: "description",
            label: "Description",
            isBody: true,
          },
        ],
      },
      {
        name: "gallery",
        label: "Gallery",
        path: "src/content/gallery",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Image Title",
            isTitle: true,
            required: true,
          },
          {
            type: "image",
            name: "image",
            label: "Image",
            required: true,
          },
          {
            type: "string",
            name: "category",
            label: "Category",
            options: [
              { label: "Events", value: "events" },
              { label: "Activities", value: "activities" },
              { label: "Donations", value: "donations" },
              { label: "Volunteers", value: "volunteers" },
              { label: "Other", value: "other" },
            ],
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: {
              component: "textarea",
            },
          },
        ],
      },
      {
        name: "news",
        label: "News & Updates",
        path: "src/content/news",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Published Date",
            required: true,
          },
          {
            type: "boolean",
            name: "featured",
            label: "Featured News",
            description: "Show this item in the featured section",
          },
          {
            type: "image",
            name: "image",
            label: "Featured Image",
          },
          {
            type: "rich-text",
            name: "content",
            label: "Content",
            isBody: true,
          },
        ],
      },
      {
        name: "sponsors",
        label: "Sponsors",
        path: "src/content/sponsors",
        format: "md",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Sponsor Name",
            isTitle: true,
            required: true,
          },
          {
            type: "image",
            name: "logo",
            label: "Logo",
            required: true,
          },
          {
            type: "string",
            name: "tier",
            label: "Sponsorship Tier",
            options: [
              { label: "Platinum", value: "platinum" },
              { label: "Gold", value: "gold" },
              { label: "Silver", value: "silver" },
              { label: "Bronze", value: "bronze" },
              { label: "Partner", value: "partner" },
            ],
            required: true,
          },
          {
            type: "string",
            name: "website",
            label: "Website URL",
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: {
              component: "textarea",
            },
          },
        ],
      },
      {
        name: "newsletters",
        label: "Newsletters",
        path: "src/content/newsletters",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Newsletter Title",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Issue Date",
            required: true,
          },
          {
            type: "image",
            name: "pdf",
            label: "PDF Document",
          },
          {
            type: "rich-text",
            name: "content",
            label: "Content Preview",
            isBody: true,
          },
        ],
      },
      {
        name: "transparency",
        label: "Transparency Reports",
        path: "src/content/transparency",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Report Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "month",
            label: "Month",
            options: [
              { label: "January", value: "january" },
              { label: "February", value: "february" },
              { label: "March", value: "march" },
              { label: "April", value: "april" },
              { label: "May", value: "may" },
              { label: "June", value: "june" },
              { label: "July", value: "july" },
              { label: "August", value: "august" },
              { label: "September", value: "september" },
              { label: "October", value: "october" },
              { label: "November", value: "november" },
              { label: "December", value: "december" },
            ],
            required: true,
          },
          {
            type: "number",
            name: "year",
            label: "Year",
            required: true,
          },
          {
            type: "number",
            name: "donations",
            label: "Total Donations Received (₹)",
            required: true,
          },
          {
            type: "number",
            name: "expenses",
            label: "Total Expenses (₹)",
            required: true,
          },
          {
            type: "image",
            name: "pdf",
            label: "Detailed Report PDF",
          },
          {
            type: "rich-text",
            name: "summary",
            label: "Report Summary",
            isBody: true,
          },
        ],
      },
    ],
  },
});
