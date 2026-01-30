"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface TeamMember {
  name: string;
  role: string;
  image?: string;
  emoji?: string;
}

interface TeamSectionProps {
  title?: string;
  members: TeamMember[];
}

export default function TeamSection({ 
  title = "Our Team",
  members 
}: TeamSectionProps) {
  return (
    <div className="w-full">
      <h2 className="font-decorative text-[2.344rem] md:text-[2.813rem] lg:text-[3.75rem] font-bold text-primary text-center mb-12">
        {title}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
        {members.map((member, index) => (
          <div
            key={index}
            className="bg-surface rounded-card p-6 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-2 text-center group"
          >
            <div className="relative mb-4 mx-auto w-24 h-24 md:w-32 md:h-32">
              {member.image ? (
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary transition-colors">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center border-4 border-primary/20 group-hover:border-primary transition-colors">
                  <span className="text-4xl md:text-5xl">{member.emoji || "✨"}</span>
                </div>
              )}
            </div>
            <h3 className="font-decorative text-xl md:text-2xl font-bold text-text mb-2 group-hover:text-primary transition-colors">
              {member.name}
            </h3>
            <p className="font-body text-sm md:text-base text-mutedText font-medium">
              {member.role}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
