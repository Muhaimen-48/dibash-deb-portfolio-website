import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryImage {
  src: string;
  title: string;
  description: string;
}

interface PhotoGalleryProps {
  images: GalleryImage[];
}

export default function PhotoGallery({ images }: PhotoGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openModal = (index: number) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);

  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  };

  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };

  return (
    <div className="w-full">
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer h-64"
            onClick={() => openModal(index)}
          >
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end p-6">
              <div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white font-heading font-semibold text-lg">
                  {image.title}
                </h3>
                <p className="text-white/80 text-sm mt-1">{image.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-in fade-in"
          onClick={closeModal}
        >
          <div
            className="relative max-w-4xl w-full animate-in zoom-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:bg-white/20 p-2 rounded-lg transition-colors z-10"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Image */}
            <img
              src={images[selectedIndex].src}
              alt={images[selectedIndex].title}
              className="w-full h-auto rounded-lg"
            />

            {/* Info */}
            <div className="bg-black/60 backdrop-blur-sm text-white p-6 rounded-b-lg">
              <h2 className="text-2xl font-heading font-bold mb-2">
                {images[selectedIndex].title}
              </h2>
              <p className="text-gray-200">{images[selectedIndex].description}</p>
            </div>

            {/* Navigation */}
            {images.length > 1 && (
              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={goToPrevious}
                  className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <span className="text-white/80 text-sm">
                  {selectedIndex + 1} / {images.length}
                </span>
                <button
                  onClick={goToNext}
                  className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
