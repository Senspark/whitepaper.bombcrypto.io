import { ReactNode } from "react";
interface PageContentProps {
  title: string;
  children: ReactNode;
  emoji?: string;
}
export function PageContent({
  title,
  children,
  emoji
}: PageContentProps) {
  // Remove the word "system" from the title if it exists
  const cleanTitle = title.replace(/\bsystem\b/gi, '').trim();
  return <div className="max-w-4xl mx-auto p-8 space-y-8">
      <div className="border-b border-border pb-6">
        <h1 className="text-4xl font-bold text-foreground flex items-center gap-4 px-0 py-0">
          {emoji && <span className="text-5xl">{emoji}</span>}
          <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent py-[4px]">
            {cleanTitle}
          </span>
        </h1>
      </div>
      <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-code:text-orange-500 prose-pre:bg-muted prose-pre:border">
        {children}
      </div>
    </div>;
}