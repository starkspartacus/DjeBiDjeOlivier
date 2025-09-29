"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface TimelineItemProps {
  title: string;
  description: string;
  date?: string;
  icon?: ReactNode;
  className?: string;
}

interface TimelineProps {
  items: TimelineItemProps[];
  className?: string;
  orientation?: "vertical" | "horizontal";
}

export function Timeline({
  items,
  className,
  orientation = "vertical",
}: TimelineProps) {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(
              entry.target.getAttribute("data-index") || "0"
            );
            setVisibleItems((prev) => {
              if (!prev.includes(index)) {
                return [...prev, index];
              }
              return prev;
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const timelineItems = timelineRef.current?.querySelectorAll("[data-index]");
    timelineItems?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  if (orientation === "horizontal") {
    return (
      <div
        ref={timelineRef}
        className={cn(
          "flex items-center space-x-8 overflow-x-auto pb-4",
          className
        )}
      >
        {items.map((item, index) => (
          <div
            key={index}
            data-index={index}
            className={cn(
              "flex-shrink-0 w-80 transition-all duration-700 transform",
              visibleItems.includes(index)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            )}
            style={{ transitionDelay: `${index * 200}ms` }}
          >
            <TimelineItem {...item} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div ref={timelineRef} className={cn("relative", className)}>
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent to-success"></div>

      {items.map((item, index) => (
        <div
          key={index}
          data-index={index}
          className={cn(
            "relative flex items-start space-x-6 mb-12 transition-all duration-700 transform",
            visibleItems.includes(index)
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-8"
          )}
          style={{ transitionDelay: `${index * 200}ms` }}
        >
          {/* Timeline dot */}
          <div className="relative z-10 flex-shrink-0 w-16 h-16 bg-gradient-to-br from-accent to-success rounded-full flex items-center justify-center shadow-lg">
            {item.icon || <div className="w-6 h-6 bg-white rounded-full"></div>}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <TimelineItem {...item} />
          </div>
        </div>
      ))}
    </div>
  );
}

function TimelineItem({
  title,
  description,
  date,
  className,
}: TimelineItemProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-lg shadow-lg p-6 border-l-4 border-l-accent",
        className
      )}
    >
      {date && (
        <div className="text-sm text-accent font-semibold mb-2">{date}</div>
      )}
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
