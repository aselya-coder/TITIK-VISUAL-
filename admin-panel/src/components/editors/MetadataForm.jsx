import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useModuleStore } from "@/store/useModuleStore";

export function MetadataForm() {
  const [metadata, setMetadata] = useState({
    pageTitle: "",
    metaDescription: "",
    slug: "",
    keywords: "",
  });
  const { setEditedContent } = useModuleStore();

  const handleChange = (field, value) => {
    const updated = { ...metadata, [field]: value };
    setMetadata(updated);
    setEditedContent({ metadata: updated });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="pageTitle">SEO Page Title</Label>
        <Input
          id="pageTitle"
          placeholder="Enter SEO page title..."
          value={metadata.pageTitle}
          onChange={(e) => handleChange('pageTitle', e.target.value)}
          maxLength={60}
        />
        <p className="text-xs text-muted-foreground">
          {metadata.pageTitle.length}/60 characters
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="metaDescription">Meta Description</Label>
        <Textarea
          id="metaDescription"
          placeholder="Enter meta description..."
          rows={3}
          value={metadata.metaDescription}
          onChange={(e) => handleChange('metaDescription', e.target.value)}
          maxLength={160}
        />
        <p className="text-xs text-muted-foreground">
          {metadata.metaDescription.length}/160 characters
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="slug">Page Slug/URL</Label>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">titikvisual.com/</span>
          <Input
            id="slug"
            placeholder="page-slug"
            value={metadata.slug}
            onChange={(e) => handleChange('slug', e.target.value.toLowerCase().replace(/\s+/g, '-'))}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="keywords">SEO Keywords</Label>
        <Input
          id="keywords"
          placeholder="keyword1, keyword2, keyword3..."
          value={metadata.keywords}
          onChange={(e) => handleChange('keywords', e.target.value)}
        />
        <p className="text-xs text-muted-foreground">Separate keywords with commas</p>
      </div>

      <Card className="bg-muted/50 p-4">
        <h4 className="mb-3 text-sm font-medium">SEO Preview</h4>
        <div className="space-y-2">
          <div className="text-lg font-medium text-primary">
            {metadata.pageTitle || "Page Title"}
          </div>
          <div className="text-xs text-success">
            titikvisual.com/{metadata.slug || "page-slug"}
          </div>
          <div className="text-sm text-muted-foreground">
            {metadata.metaDescription || "Meta description will appear here..."}
          </div>
          {metadata.keywords && (
            <div className="flex flex-wrap gap-1 pt-2">
              {metadata.keywords.split(',').map((keyword, i) => (
                <Badge key={i} variant="secondary" className="text-xs">
                  {keyword.trim()}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}