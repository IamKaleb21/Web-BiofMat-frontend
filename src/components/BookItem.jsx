function BookItem({ imageSrc, title, subtitle }) {
    return (
      <div className="text-center border-blue-600 p-4">
        <img src={imageSrc} alt={title} className="w-full h-auto mb-4" />
        <p className="text-blue-900 font-semibold text-lg">
          {title} <br /> {subtitle}
        </p>
      </div>
    );
  }
  
  export default BookItem;