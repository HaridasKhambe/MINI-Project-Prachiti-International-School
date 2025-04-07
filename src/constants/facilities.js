// Dynamic image imports for facilities
const facilityImages = import.meta.glob("../assets/Facilities/classrooms/facility/*.jpg", { eager: true });
const classImages = import.meta.glob("../assets/Facilities/classrooms/classes/*.jpg", { eager: true });
const libraryImages = import.meta.glob("../assets/Facilities/library/*.jpg", { eager: true,  import: 'default' });

const scienceLabImages = import.meta.glob("../assets/Facilities/science-lab/*.jpg", { eager: true });
const internetImages = import.meta.glob("../assets/Facilities/internet/*.jpg", { eager: true });
const languageLabImages = import.meta.glob("../assets/Facilities/language-lab/*.jpg", { eager: true });
const artCraftRoomImages = import.meta.glob("../assets/Facilities/art-craft-room/*.jpg", { eager: true });
const medicalRoomImages = import.meta.glob("../assets/Facilities/medical-room/*.jpg", { eager: true });

// Function to format image data dynamically
// const formatImages = (images) =>
//   Object.keys(images).map((path) => ({
//     image: images[path].default,
//     name: path.split("/").pop().replace(".jpg", "").replace(/-/g, " "), // Extracts filename & formats name
//   }));


const formatImages = (images) => {
  console.log("Imported Images:", images); // Debugging
  return Object.keys(images).map((path) => {
    console.log("Processing:", path); // Log each file path
    return {
      image: images[path]?.default || images[path], // Ensure correct path
      name: path.split("/").pop().replace(".jpg", "").replace(/-/g, " "),
    };
  });
};




// Facility Data (Includes Classrooms & Library)
export const facilitiesData = {
  library: {
    intro: "Library is equipped with Reference books, Encyclopedias, Practice books, Grammar books on English, Hindi, Marathi & Sanskrit. Beside books Library has Educational audio Visual CD, Maps, globe, Charts on various Subjects & Books on Child Psychology & Education Management, Books based on General Knowledge.",
    images: formatImages(libraryImages),
    rules: [
      "Books are the property of College.",
      "Keep silence in the Reading Hall.",
      "Keep your bags in the property counter.",
      "Students and faculty members are members of the library.",
      // "UG and Polytechnic students can issue three books for ten days. PG students in engineering can issue five books for fifteen days.",
      "Books will be issued to Library card holders only.",
      "Books may be reissued if there is no claim on it.",
      // "Online Renewal facility is available on the Web OPAC.",
      // "A fine of Re.1 per day and per book will be charged on expiry of return date.",
      // "A fine of Rs. 25 per group of students will be collected after non-receiving of book sets after one week of semester examinations.",
      // "Student has to get the copy of the lost book.",
      // "Only back issues of journals will be issued outside.",
      "Do not damage the book in any form.",
      // "No reference books will be issued.",
      // "In case of loss of library card, inform the librarian immediately.",
      "Books issued need to be returned before proceeding for vacation.",
      "Students need to communicate if there is any change in contact details.",
      "Library clearance is a must to terminate the membership.",
      "Outside students and faculty need to take permission from the principal for using the library.",
      "Management and principal reserve incidental rights.",
      "Sample question banks are provided",
      "Educational reference material has been provided for teachers.",
      " Utility of Library - Library Timings are 9 a.m. to 3 p.m.",
    ],
  },

  classrooms: {
    intro: "Our classrooms are equipped with modern amenities such as smart boards, projectors, and high-speed WiFi. Designed for an interactive and engaging learning experience, each classroom supports digital learning and collaboration.",
    rooms: formatImages(classImages),
    facilities: formatImages(facilityImages),
  },

  scienceLab: {
    intro: "The School has well equipped laboratories For Physics, Chemistry and Biology and Maths. The lab is regularly equipped and updated with latest equipments, instruments, specimens, charts etc. as per the requirement with proper safety measures.",
    images: formatImages(scienceLabImages),
  },

  internet: {
    intro: "Information and communication technology (ICT) is an integral part of the school's curriculum. The school computer lab is adequately equipped with computers, multimedia, scanner, LCD, OHP. Internet connectivity is also provided to the students' teachers and staff. Teachers assist students in seeking out information, creating multimedia content, collaborating on project work and presenting the knowledge gathered from multiple sources.",
    images: formatImages(internetImages),
  },

  languageLab: {
    intro: "The language lab is well equipped with linguaphones and liguaphone sets. The activities of the language laballow students and teachers to share ideas about the language, to practice using the language and most importantly, to do so in a fun ,stress free atmosphere. the activity lists do not advocate a theory or a method .it consists of language immersion followed by language acquisition leading to effective learning of the language.",
    images: formatImages(languageLabImages),
  },

  artCraftRoom: {
    intro: "Art and Craft is a creative activity in the school and is an important part of the curriculum. Students participate in competitions held by various other organizations and institutes. It helps students to develop their creativity and imagination and gives them an opportunity to transform abstract ideas into something concrete and visual and encourages them to try new ideas and take risks. We arrange yearly Art and Craft Exhibition and encourage students to present their art and craft models.",
    images: formatImages(artCraftRoomImages),
  },

  medicalRoom: {
    intro: "Medical room of the school is well equipped with the required medical equipments to deal with medical emergencies. Periodical medical check-up is conducted for all the students and the school employees. In case of any sudden illness or accident, First Aid is provided. In case of accidental emergency, medical aid is given to the child and if required is taken to the nearest hospital for treatment and parents are immediately informed. Medical check -up ,Counselling for Boys and Girls.",
    images: formatImages(medicalRoomImages),
  },
};
