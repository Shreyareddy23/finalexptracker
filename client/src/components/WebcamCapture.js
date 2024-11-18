// import React, { useState, useEffect, useRef } from 'react';

// const WebcamCapture = () => {
//   const videoRef = useRef(null);
//   const [isCameraReady, setIsCameraReady] = useState(false);

//   const uploadImage = async (imageBlob) => {
//     const formData = new FormData();
//     formData.append('image', imageBlob, 'webcam_image.jpg');

//     try {
//       const uploadResponse = await fetch('http://localhost:5001/upload', {
//         method: 'POST',
//         body: formData,
//       });

//       if (!uploadResponse.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const data = await uploadResponse.json();
//       console.log('Image uploaded:', data);
//     } catch (error) {
//       console.error('Error uploading image:', error);
//     }
//   };

//   const captureImage = () => {
//     if (videoRef.current) {
//       const canvas = document.createElement('canvas');
//       canvas.width = videoRef.current.videoWidth;
//       canvas.height = videoRef.current.videoHeight;
//       const context = canvas.getContext('2d');
//       context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

//       canvas.toBlob((blob) => {
//         if (blob) {
//           console.log('Captured image blob:', blob);
//           uploadImage(blob);
//         } else {
//           console.error('Failed to capture image');
//         }
//       }, 'image/jpeg');
//     }
//   };

//   useEffect(() => {
//     const setupCamera = async () => {
//       try {
//         const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//         videoRef.current.srcObject = stream;
//         setIsCameraReady(true);
//       } catch (error) {
//         console.error('Error accessing the camera:', error);
//       }
//     };

//     setupCamera();

//     const intervalId = setInterval(() => {
//       if (isCameraReady) {
//         captureImage();
//       }
//     }, 3000); // Capture and upload every 3 seconds

//     return () => clearInterval(intervalId); // Cleanup on unmount
//   }, [isCameraReady]);

//   return (
//     <div style={{ display: 'none' }}> {/* Hide video stream from view */}
//       <video ref={videoRef} autoPlay playsInline />
//     </div>
//   );
// };

// export default WebcamCapture;
// import React, { useState, useEffect, useRef } from 'react';

// const WebcamCapture = () => {
//   const videoRef = useRef(null);
//   const [isCameraReady, setIsCameraReady] = useState(false);

//   const uploadImage = async (imageBlob) => {
//     const formData = new FormData();
//     formData.append('image', imageBlob, 'webcam_image.jpg');

//     try {
//       const uploadResponse = await fetch('http://localhost:5001/upload', {
//         method: 'POST',
//         body: formData,
//       });

//       if (!uploadResponse.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const data = await uploadResponse.json();
//       console.log('Image uploaded:', data);
//     } catch (error) {
//       console.error('Error uploading image:', error);
//     }
//   };

//   const captureImage = () => {
//     if (videoRef.current) {
//       const canvas = document.createElement('canvas');
//       canvas.width = videoRef.current.videoWidth;
//       canvas.height = videoRef.current.videoHeight;
//       const context = canvas.getContext('2d');
//       context.drawImage(
//         videoRef.current,
//         0,
//         0,
//         canvas.width,
//         canvas.height
//       );

//       canvas.toBlob(
//         (blob) => {
//           if (blob) {
//             uploadImage(blob);
//           } else {
//             console.error('Failed to capture image');
//           }
//         },
//         'image/jpeg',
//         0.95
//       );
//     }
//   };

//   useEffect(() => {
//     const setupCamera = async () => {
//       try {
//         const stream = await navigator.mediaDevices.getUserMedia({
//           video: true,
//         });
//         videoRef.current.srcObject = stream;
//         setIsCameraReady(true);
//       } catch (error) {
//         console.error('Error accessing the camera:', error);
//       }
//     };

//     setupCamera();

//     const intervalId = setInterval(() => {
//       if (isCameraReady) {
//         captureImage();
//       }
//     }, 3000);

//     return () => clearInterval(intervalId);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [isCameraReady]);

//   return (
//     <div style={{ display: 'none' }}>
//       <video ref={videoRef} autoPlay playsInline />
//     </div>
//   );
// };

// export default WebcamCapture;
// import React, { useState, useEffect, useRef } from 'react';

// const WebcamCapture = () => {
//   const videoRef = useRef(null);
//   const [isCameraReady, setIsCameraReady] = useState(false);

//   const uploadImage = async (imageBlob) => {
//     const formData = new FormData();
//     formData.append('image', imageBlob, 'webcam_image.jpg');

//     try {
//       const uploadResponse = await fetch('http://localhost:5001/upload', {
//         method: 'POST',
//         body: formData,
//       });

//       if (!uploadResponse.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const data = await uploadResponse.json();
//       console.log('Image uploaded:', data);
//     } catch (error) {
//       console.error('Error uploading image:', error);
//     }
//   };

//   const captureImage = () => {
//     if (videoRef.current) {
//       const canvas = document.createElement('canvas');
//       canvas.width = videoRef.current.videoWidth;
//       canvas.height = videoRef.current.videoHeight;
//       const context = canvas.getContext('2d');
//       context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

//       canvas.toBlob((blob) => {
//         if (blob) {
//           console.log('Captured image blob:', blob);
//           uploadImage(blob);
//         } else {
//           console.error('Failed to capture image');
//         }
//       }, 'image/jpeg');
//       0.95;
//     }
//   };

//   useEffect(() => {
//     const setupCamera = async () => {
//       try {
//         const stream = await navigator.mediaDevices.getUserMedia({ video: true });

//         // Wait for the video metadata to load
//         videoRef.current.onloadedmetadata = () => {
//           setIsCameraReady(true);
//         }
//           catch(error){
//             console.error('Error starting video playback:', error);
//           }
//         };
//       } catch (error) {
//         console.error('Error accessing the camera:', error);
//       }
//     };

//     setupCamera();

//     const intervalId = setInterval(() => {
//       if (isCameraReady) {
//         console.log('Interval triggered');
//         captureImage();
//       }
//     }, 3000); // Capture and upload every 3 seconds

//     return () => clearInterval(intervalId); // Cleanup on unmount
//   }, [isCameraReady]);

//   return (
//     <div style={{ display: 'none' }}> {/* Hide video stream from view */}
//       <video ref={videoRef} autoPlay playsInline />
//     </div>
//   );
// };

// export default WebcamCapture;
// import React, { useState, useEffect, useRef } from 'react';

// const WebcamCapture = () => {
//   const videoRef = useRef(null);
//   const [isCameraReady, setIsCameraReady] = useState(false);

//   const uploadImage = async (imageBlob) => {
//     const formData = new FormData();
//     formData.append('image', imageBlob, 'webcam_image.jpg');

//     try {
//       const uploadResponse = await fetch('http://localhost:5001/upload', {
//         method: 'POST',
//         body: formData,
//       });

//       if (!uploadResponse.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const data = await uploadResponse.json();
//       console.log('Image uploaded:', data);
//     } catch (error) {
//       console.error('Error uploading image:', error);
//     }
//   };

//   const captureImage = () => {
//     if (videoRef.current) {
//       const canvas = document.createElement('canvas');
//       canvas.width = videoRef.current.videoWidth;
//       canvas.height = videoRef.current.videoHeight;
//       const context = canvas.getContext('2d');
//       context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

//       canvas.toBlob((blob) => {
//         if (blob) {
//           console.log('Captured image blob:', blob);
//           uploadImage(blob);
//         } else {
//           console.error('Failed to capture image');
//         }
//       }, 'image/jpeg');
//     }
//   };

//   useEffect(() => {
//     const setupCamera = async () => {
//       try {
//         const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//         videoRef.current.srcObject = stream;

//         // Wait for the video metadata to load
//         videoRef.current.onloadedmetadata = () => {
//           setIsCameraReady(true);
//           videoRef.current.play().catch(error => {
//             console.error('Error starting video playback:', error);
//           });
//         };
//       } catch (error) {
//         console.error('Error accessing the camera:', error);
//       }
//     };

//     setupCamera();

//     const intervalId = setInterval(() => {
//       if (isCameraReady) {
//         console.log('Interval triggered');
//         captureImage();
//       }
//     }, 3000); // Capture and upload every 3 seconds

//     return () => clearInterval(intervalId); // Cleanup on unmount
//   }, [isCameraReady]);

//   return (
//     <div style={{ position: 'absolute', top: '-9999px', left: '-9999px' }}>
//       {/* Move the video off-screen instead of hiding it completely */}
//       <video ref={videoRef} autoPlay playsInline />
//     </div>
//   );
// };

// export default WebcamCapture;
// import React, { useState, useEffect, useRef } from 'react';

// const WebcamCapture = () => {
//   const videoRef = useRef(null);
//   const [isCameraReady, setIsCameraReady] = useState(false);

//   const uploadImage = async (imageBlob) => {
//     const formData = new FormData();
//     formData.append('file', imageBlob, 'webcam_image.jpg'); // Ensure 'image' matches the server

//     try {
//       const uploadResponse = await fetch('http://localhost:5000/upload', {
//         method: 'POST',
//         body: formData,
//       });

//       if (!uploadResponse.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const data = await uploadResponse.json();
//       console.log('Image uploaded:', data);
//     } catch (error) {
//       console.error('Error uploading image:', error);
//     }
//   };

//   const captureImage = () => {
//     if (videoRef.current) {
//       const canvas = document.createElement('canvas');
//       canvas.width = videoRef.current.videoWidth;
//       canvas.height = videoRef.current.videoHeight;
//       const context = canvas.getContext('2d');
//       context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

//       canvas.toBlob(
//         (blob) => {
//           if (blob) {
//             uploadImage(blob);
//           } else {
//             console.error('Failed to capture image');
//           }
//         },
//         'image/jpeg',
//         0.95
//       );
//     }
//   };

//   useEffect(() => {
//     const setupCamera = async () => {
//       try {
//         const stream = await navigator.mediaDevices.getUserMedia({
//           video: true,
//         });
//         videoRef.current.srcObject = stream;
//         setIsCameraReady(true);
//       } catch (error) {
//         console.error('Error accessing the camera:', error);
//       }
//     };

//     setupCamera();

//     const intervalId = setInterval(() => {
//       if (isCameraReady) {
//         captureImage();
//       }
//     }, 3000);

//     return () => clearInterval(intervalId);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [isCameraReady]);

//   return (
//     <div style={{ display: 'none' }}>
//       <video ref={videoRef} autoPlay playsInline />
//     </div>
//   );
// };

// export default WebcamCapture;


// with debs provision 



// import React, { useState, useEffect, useRef } from 'react';

// const WebcamCapture = ({ loggedInUsername }) => { // Accept logged-in username as a prop
//   const videoRef = useRef(null);
//   const [isCameraReady, setIsCameraReady] = useState(false);

//   const uploadImage = async (imageBlob) => {
//     const formData = new FormData();
//     formData.append('image', imageBlob, 'webcam_image.jpg'); // Ensure 'image' matches the server
//     formData.append('username', loggedInUsername); // Append the username to the form data

//     try {
//       const uploadResponse = await fetch('http://localhost:5000/api/upload', {
//         method: 'POST',
//         body: formData,
//       });

//       if (!uploadResponse.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const data = await uploadResponse.json();
//       console.log('Image uploaded:', data);
//     } catch (error) {
//       console.error('Error uploading image:', error);
//     }
//   };

//   const captureImage = () => {
//     if (videoRef.current) {
//       const canvas = document.createElement('canvas');
//       canvas.width = videoRef.current.videoWidth;
//       canvas.height = videoRef.current.videoHeight;
//       const context = canvas.getContext('2d');
//       context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

//       canvas.toBlob(
//         (blob) => {
//           if (blob) {
//             uploadImage(blob); // Upload the captured image
//           } else {
//             console.error('Failed to capture image');
//           }
//         },
//         'image/jpeg',
//         0.95
//       );
//     }
//   };

//   useEffect(() => {
//     const setupCamera = async () => {
//       try {
//         const stream = await navigator.mediaDevices.getUserMedia({
//           video: true,
//         });
//         videoRef.current.srcObject = stream;
//         setIsCameraReady(true);
//       } catch (error) {
//         console.error('Error accessing the camera:', error);
//       }
//     };

//     setupCamera();

//     const intervalId = setInterval(() => {
//       if (isCameraReady) {
//         captureImage(); // Capture an image every 3 seconds
//       }
//     }, 3000);

//     return () => clearInterval(intervalId);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [isCameraReady]);

//   return (
//     <div style={{ display: 'none' }}>
//       <video ref={videoRef} autoPlay playsInline />
//     </div>
//   );
// };

// export default WebcamCapture;



// trying to update images in mongodb




import React, { useState, useEffect, useRef } from 'react';

const WebcamCapture = ({ loggedInUsername, gameSessionId, isCameraActive }) => {
  const videoRef = useRef(null);
  const [isCameraReady, setIsCameraReady] = useState(false);

  const uploadImage = async (imageBlob) => {
    const formData = new FormData();
    formData.append('file', imageBlob, 'webcam_image.jpg');
    formData.append('username', loggedInUsername); 
    formData.append('gameSessionId', gameSessionId); // Include the game session ID

    try {
      const uploadResponse = await fetch('http://localhost:5000/upload', {
        method: 'POST',
        body: formData,
      });

      if (!uploadResponse.ok) {
        throw new Error('Failed to upload image: ' + (await uploadResponse.text()));
      }

      const data = await uploadResponse.json();
      console.log('Image uploaded:', data);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const captureImage = () => {
    if (videoRef.current) {
      const canvas = document.createElement('canvas');
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      const context = canvas.getContext('2d');
      context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

      canvas.toBlob(
        (blob) => {
          if (blob) {
            uploadImage(blob);
          } else {
            console.error('Failed to capture image');
          }
        },
        'image/jpeg',
        0.95
      );
    }
  };

  useEffect(() => {
    const setupCamera = async () => {
      if (isCameraActive) {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ video: true });
          videoRef.current.srcObject = stream;
          setIsCameraReady(true);
        } catch (error) {
          console.error('Error accessing the camera:', error);
        }
      } else if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach((track) => track.stop());
        videoRef.current.srcObject = null;
        setIsCameraReady(false);
      }
    };

    setupCamera();

    const intervalId = setInterval(() => {
      if (isCameraReady) {
        captureImage();
      }
    }, 3000);

    return () => {
      clearInterval(intervalId);
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, [isCameraActive, isCameraReady]);

  return (
    <div style={{ display: 'none' }}>
      <video ref={videoRef} autoPlay playsInline />
    </div>
  );
};

export default WebcamCapture;