import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  FileText,
  ArrowLeft,
  Share2,
  MoreHorizontal,
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Link as LinkIcon,
  Image,
  Code,
  Quote,
  Heading1,
  Heading2
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Editor = () => {
  const { id } = useParams();
  const isNew = id === "new";
  const [title, setTitle] = useState(isNew ? "Untitled Document" : "Q1 Project Roadmap");
  const [content, setContent] = useState(
    isNew
      ? ""
      : `This document outlines our key objectives and milestones for the upcoming quarter.

## Overview

Our primary focus areas include:
- Product development and feature releases
- Customer acquisition and retention
- Team growth and development

## Key Milestones

1. Launch v2.0 with real-time collaboration features
2. Reach 10,000 active users
3. Expand engineering team by 3 new hires

## Timeline

Week 1-4: Feature development and testing
Week 5-8: Beta launch and feedback collection
Week 9-12: Public launch and marketing push`
  );

  const toolbarButtons = [
    { icon: Heading1, label: "Heading 1" },
    { icon: Heading2, label: "Heading 2" },
    { icon: Bold, label: "Bold" },
    { icon: Italic, label: "Italic" },
    { icon: Underline, label: "Underline" },
    { divider: true },
    { icon: List, label: "Bullet List" },
    { icon: ListOrdered, label: "Numbered List" },
    { icon: Quote, label: "Quote" },
    { divider: true },
    { icon: AlignLeft, label: "Align Left" },
    { icon: AlignCenter, label: "Align Center" },
    { icon: AlignRight, label: "Align Right" },
    { divider: true },
    { icon: LinkIcon, label: "Insert Link" },
    { icon: Image, label: "Insert Image" },
    { icon: Code, label: "Code Block" }
  ];

  const collaborators = [
    { name: "Alice", color: "bg-primary" },
    { name: "Bob", color: "bg-accent" },
    { name: "Carol", color: "bg-green-500" }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <Link
              to="/dashboard"
              className="p-2 rounded-lg hover:bg-secondary transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-muted-foreground" />
            </Link>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <FileText className="w-4 h-4 text-primary" />
              </div>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="text-lg font-medium text-foreground bg-transparent border-none outline-none focus:ring-0"
                placeholder="Untitled Document"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Collaborators */}
            <div className="hidden sm:flex items-center gap-2">
              <div className="flex -space-x-2">
                {collaborators.map((user, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full ${user.color} flex items-center justify-center text-xs font-medium text-white ring-2 ring-background`}
                  >
                    {user.name[0]}
                  </div>
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {collaborators.length} editing
              </span>
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            </div>

            <Button variant="outline" size="sm">
              <Share2 className="w-4 h-4" />
              Share
            </Button>
            <button className="p-2 rounded-lg hover:bg-secondary transition-colors">
              <MoreHorizontal className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>
        </div>

        {/* Toolbar */}
        <div className="flex items-center gap-1 px-4 py-2 border-t border-border/50 overflow-x-auto">
          {toolbarButtons.map((item, i) =>
            item.divider ? (
              <div key={i} className="w-px h-6 bg-border mx-1" />
            ) : (
              <button
                key={i}
                className="toolbar-button"
                title={item.label}
              >
                <item.icon className="w-4 h-4 text-muted-foreground" />
              </button>
            )
          )}
        </div>
      </header>

      {/* Editor */}
      <main className="flex-1 flex justify-center py-8 px-4">
        <div className="w-full max-w-3xl">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Start writing..."
            className="w-full min-h-[calc(100vh-200px)] bg-transparent border-none outline-none resize-none text-foreground leading-relaxed placeholder:text-muted-foreground/50"
            style={{ fontSize: "1.125rem" }}
          />
        </div>
      </main>

      {/* Status bar */}
      <footer className="sticky bottom-0 bg-background/80 backdrop-blur-xl border-t border-border/50 px-4 py-2">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-4">
            <span>Last saved: Just now</span>
            <span>•</span>
            <span>{content.split(/\s+/).filter(Boolean).length} words</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            <span>All changes saved</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Editor;
