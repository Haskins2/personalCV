export interface Slide {
  id: string;
  thumbnail: string;
  title?: string;
  description?: string;
}

export interface KeynotePresentationData {
  slideList: string[];
  title: string;
  slideCount: number;
}

export function extractSlidesFromKeynote(presentationPath: string): Slide[] {
  const slideTitles = [
    "Title Slide",
    "Problem Statement", 
    "Solution Overview",
    "Technical Architecture",
    "Implementation Details",
    "Results & Performance",
    "Conclusion & Future Work"
  ];

  const slideDescriptions = [
    "Introduction to the Information Retrieval Pipeline project",
    "Challenges in document retrieval and information processing",
    "RAG system approach and key benefits",
    "System architecture and component interactions",
    "Technical implementation using TF-IDF and Claude API",
    "Performance metrics and achieved results",
    "Project outcomes and potential improvements"
  ];

  // Use the high-resolution images from the exported images directory
  return Array.from({ length: 7 }, (_, index) => ({
    id: `slide-${index + 1}`,
    thumbnail: `/IRSE_Presentation_images/IRSE_Presentation_images.${String(index + 1).padStart(3, '0')}.jpeg`,
    title: slideTitles[index],
    description: slideDescriptions[index]
  }));
}
