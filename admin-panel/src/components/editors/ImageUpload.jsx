import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Upload, X, Image as ImageIcon, Check } from "lucide-react";
import { useModuleStore } from "@/store/useModuleStore";

export function ImageUpload() {
  const [images, setImages] = useState([]);
  const { setEditedContent } = useModuleStore();

  const onDrop = useCallback((acceptedFiles) => {
    const newImages = acceptedFiles.map((file) => ({
      id: Math.random().toString(36).substr(2, 9),
      file,
      preview: URL.createObjectURL(file),
      name: file.name,
    }));
    setImages((prev) => [...prev, ...newImages]);
    setEditedContent({ images: [...images, ...newImages] });
  }, [images, setEditedContent]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp']
    },
    multiple: true,
  });

  const removeImage = (id) => {
    setImages((prev) => prev.filter((img) => img.id !== id));
    setEditedContent({ images: images.filter((img) => img.id !== id) });
  };

  return (
    <div className="space-y-4">
      <div>
        <Label>Image Management</Label>
        <p className="text-xs text-muted-foreground">Upload, preview, and manage images</p>
      </div>

      <Card
        {...getRootProps()}
        className={`cursor-pointer border-2 border-dashed p-8 text-center transition-colors ${
          isDragActive ? "border-primary bg-primary/5" : "border-muted-foreground/25"
        }`}
      >
        <input {...getInputProps()} />
        <div className="space-y-3">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <Upload className="h-6 w-6 text-primary" />
          </div>
          <div>
            <p className="font-medium">
              {isDragActive ? "Drop images here" : "Drag & drop images here"}
            </p>
            <p className="text-sm text-muted-foreground">or click to browse</p>
          </div>
          <Button type="button" variant="secondary" size="sm">
            Choose Files
          </Button>
        </div>
      </Card>

      {images.length > 0 && (
        <div className="space-y-2">
          <Label>Uploaded Images ({images.length})</Label>
          <div className="grid gap-3">
            {images.map((image) => (
              <Card key={image.id} className="p-3">
                <div className="flex items-center gap-3">
                  <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border bg-muted">
                    <img
                      src={image.preview}
                      alt={image.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <p className="truncate text-sm font-medium">{image.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {(image.file.size / 1024).toFixed(2)} KB
                    </p>
                  </div>
                  <div className="flex gap-1">
                    <Button size="sm" variant="outline">
                      <Check className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => removeImage(image.id)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {images.length === 0 && (
        <Card className="p-6 text-center">
          <ImageIcon className="mx-auto h-8 w-8 text-muted-foreground/50" />
          <p className="mt-2 text-sm text-muted-foreground">No images uploaded yet</p>
        </Card>
      )}
    </div>
  );
}