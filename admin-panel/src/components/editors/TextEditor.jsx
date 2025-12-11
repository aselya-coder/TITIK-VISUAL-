import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Bold, Italic, Type } from "lucide-react";
import { useModuleStore } from "@/store/useModuleStore";

export function TextEditor() {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [content, setContent] = useState("");
  const { setEditedContent } = useModuleStore();

  const handleChange = (field, value) => {
    if (field === 'title') setTitle(value);
    if (field === 'subtitle') setSubtitle(value);
    if (field === 'content') setContent(value);
    
    setEditedContent({ [field]: value });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="title">Page Title</Label>
        <Input
          id="title"
          placeholder="Enter page title..."
          value={title}
          onChange={(e) => handleChange('title', e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="subtitle">Subtitle</Label>
        <Input
          id="subtitle"
          placeholder="Enter subtitle..."
          value={subtitle}
          onChange={(e) => handleChange('subtitle', e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="content">Content</Label>
        <div className="space-y-2">
          <div className="flex gap-1 rounded-md border bg-muted/50 p-1">
            <Button size="sm" variant="ghost" title="Bold">
              <Bold className="h-4 w-4" />
            </Button>
            <Button size="sm" variant="ghost" title="Italic">
              <Italic className="h-4 w-4" />
            </Button>
            <Button size="sm" variant="ghost" title="Font Size">
              <Type className="h-4 w-4" />
            </Button>
          </div>
          <Textarea
            id="content"
            placeholder="Enter content text..."
            rows={8}
            value={content}
            onChange={(e) => handleChange('content', e.target.value)}
          />
        </div>
      </div>

      <Card className="bg-muted/50 p-4">
        <h4 className="mb-2 text-sm font-medium">Live Preview</h4>
        <div className="space-y-2 rounded-md border bg-card p-4">
          {title && <h2 className="text-xl font-bold">{title}</h2>}
          {subtitle && <h3 className="text-base text-muted-foreground">{subtitle}</h3>}
          {content && <p className="text-sm">{content}</p>}
          {!title && !subtitle && !content && (
            <p className="text-sm text-muted-foreground">Preview will appear here...</p>
          )}
        </div>
      </Card>
    </div>
  );
}