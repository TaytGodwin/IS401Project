import React from "react";

interface SidebarItemProps {
  title: string;
  icon: string;
}

/**
 * SidebarItem component that displays a navigation item with an icon and title.
 * The text color is set to white, with a slight darkening on hover.
 */
export default function SidebarItem({ title, icon }: SidebarItemProps) {
  // Create a slug from the title (e.g., "All Groups" becomes "/all-groups")
  const slug = title.toLowerCase().replace(/\s+/g, "-");
  return (
    <a
      href={`/${slug}`}
      className="flex gap-5 items-center p-2 text-white hover:text-gray-300 transition-colors"
      aria-label={title}
    >
      <div className="inline-flex justify-center items-center p-3 w-11 h-11 bg-white-700 rounded-md border border-white-700">
        <span dangerouslySetInnerHTML={{ __html: icon }} />
      </div>
      <h2 className="text-xl font-bold">{title}</h2>
    </a>
  );
}
