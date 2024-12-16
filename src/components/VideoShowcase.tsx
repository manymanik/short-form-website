export default function VideoShowcase() {
  const videos = [
    "https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1574717024453-354639eb3204?ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3"
  ];

  return (
    <section className="bg-black py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex gap-8 animate-scroll">
          {videos.map((video, index) => (
            <div key={index} className="min-w-[300px] h-[500px] rounded-lg overflow-hidden">
              <img 
                src={video} 
                alt={`Video preview ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}