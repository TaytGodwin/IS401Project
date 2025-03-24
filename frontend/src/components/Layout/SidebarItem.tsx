import React from "react";

interface SidebarItemProps {
  title: string;
  icon: string;
}

/**
 * SidebarItem component that displays a navigation item with an icon and title
 */
export default function SidebarItem({ title, icon }: SidebarItemProps) {
    // This passed the name of the title, lowercase to handle routing later
    const slug = title.toLowerCase().replace(/\s+/g, "-");
  return (
    <a href={`/${slug}`} className="flex gap-5 items-center" aria-label={title}>
      <div className="inline-flex justify-center items-center p-3 w-11 h-11 bg-cyan-700 rounded-md border border-cyan-700 border-solid">
        <span dangerouslySetInnerHTML={{ __html: icon }} />
      </div>
      <h2 className="text-xl font-bold text-cyan-700">{title}</h2>
    </a>
  );
}
