// import Image from "next/image";

// const images = Array.from(
//   { length: 13 },
//   (_, index) => `/images/${index + 1}.jpg`,
// );

// const columns = [
//   [images[0], images[3], images[6], images[9], images[12]],
//   [images[1], images[4], images[7], images[10], images[0]],
//   [images[2], images[5], images[8], images[11], images[1]],
// ];

// const duplicatedSets = [0, 1, 2];

// const ImageColumns = () => {
//   return (
//     <div className="image-columns-frame">
//       <div className="image-columns-grid">
//         {columns.map((columnImages, columnIndex) => {
//           const directionClass =
//             columnIndex % 2 === 0
//               ? "image-scroll-up"
//               : "image-scroll-down";

//           return (
//             <div
//               key={columnIndex}
//               className={`image-scroll-column ${directionClass}`}
//             >
//               {duplicatedSets.map((setIndex) => (
//                 <div
//                   key={setIndex}
//                   className="image-scroll-set"
//                   aria-hidden={setIndex !== 0}
//                 >
//                   {columnImages.map((image, imageIndex) => (
//                     <div
//                       key={`${setIndex}-${image}-${imageIndex}`}
//                       className="image-scroll-card"
//                     >
//                       <Image
//                         src={image}
//                         alt={
//                           setIndex === 0
//                             ? `Project showcase ${imageIndex + 1}`
//                             : ""
//                         }
//                         fill
//                         sizes="(max-width: 768px) 33vw, 280px"
//                         className="object-cover"
//                       />
//                     </div>
//                   ))}
//                 </div>
//               ))}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default ImageColumns;



import Image from "next/image";

// const images = Array.from(
//   { length: 13 },
//   (_, index) => `/images/${index + 1}.jpg`,
// );
const images = Array.from(
  { length: 6 },
  (_, index) => `/images/${index + 1}.png`,
);

// const columns = [
//   [images[0], images[4], images[8], images[12]],
//   [images[1], images[5], images[9], images[0]],
//   [images[2], images[6], images[10], images[1]],
//   [images[3], images[7], images[11], images[2]],
// ];
const columns = [
  [images[0], images[1], images[2], images[3]],
  [images[4], images[5], images[0], images[1]],
  [images[2], images[3], images[4], images[5]],
  [images[1], images[4], images[2], images[5]],
];
const duplicatedSets = [0, 1, 2];

const ImageColumns = () => {
  return (
    <div className="image-columns-frame">
      <div className="image-columns-grid">
        {columns.map((columnImages, columnIndex) => {
          const directionClass =
            columnIndex % 2 === 0
              ? "image-scroll-up"
              : "image-scroll-down";

          return (
            <div
              key={columnIndex}
              className={`image-scroll-column ${directionClass}`}
            >
              {duplicatedSets.map((setIndex) => (
                <div
                  key={setIndex}
                  className="image-scroll-set"
                  aria-hidden={setIndex !== 0}
                >
                  {columnImages.map((image, imageIndex) => (
                    <div
                      key={`${setIndex}-${image}-${imageIndex}`}
                      className="image-scroll-card"
                    >
                      <Image
                        src={image}
                        alt={
                          setIndex === 0
                            ? `Project showcase ${imageIndex + 1}`
                            : ""
                        }
                        fill
                        sizes="(max-width: 768px) 25vw, 220px"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageColumns;