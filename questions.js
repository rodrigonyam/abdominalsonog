// Comprehensive Abdominal Sonography Question Database
// Organized by Anatomical Regions Based on Standard Ultrasound Education Principles

const questionDatabase = {
    // LIVER SECTION
    liver: [
        {
            id: 1,
            type: "multipleChoice",
            question: "The liver receives what percentage of its blood supply from the portal vein?",
            options: ["25%", "50%", "75%", "90%"],
            correct: 2,
            explanation: "The liver receives approximately 75% of its blood supply from the portal vein and 25% from the hepatic artery."
        },
        {
            id: 2,
            type: "multipleChoice",
            question: "Which Couinaud segment is located in the caudate lobe?",
            options: ["Segment VIII", "Segment I", "Segment IV", "Segment II"],
            correct: 1,
            explanation: "The caudate lobe corresponds to Couinaud segment I and has independent vascular supply."
        },
        {
            id: 3,
            type: "multipleChoice",
            question: "Normal liver span in the midclavicular line should not exceed:",
            options: ["10 cm", "13 cm", "16 cm", "20 cm"],
            correct: 2,
            explanation: "Normal liver span in the midclavicular line should not exceed 16 cm in adults."
        },
        {
            id: 4,
            type: "multipleChoice",
            question: "The ligamentum teres divides which hepatic segments?",
            options: ["II and III", "III and IV", "IV and V", "V and VI"],
            correct: 1,
            explanation: "The ligamentum teres (round ligament) divides the left lobe into segments III and IV."
        },
        {
            id: 5,
            type: "multipleChoice",
            question: "Hepatocellular carcinoma most commonly occurs in patients with:",
            options: ["Normal liver", "Fatty liver", "Cirrhosis", "Hepatitis A"],
            correct: 2,
            explanation: "HCC most commonly develops in patients with underlying cirrhosis from various causes."
        },
        {
            id: 6,
            type: "multipleChoice",
            question: "The most common benign hepatic tumor is:",
            options: ["Hemangioma", "Focal nodular hyperplasia", "Hepatic adenoma", "Simple cyst"],
            correct: 0,
            explanation: "Hemangioma is the most common benign hepatic tumor, found in 1-20% of the population."
        },
        {
            id: 7,
            type: "multipleChoice",
            question: "Fatty infiltration of the liver causes:",
            options: ["Decreased echogenicity", "Increased echogenicity", "No change in echogenicity", "Mixed echogenicity"],
            correct: 1,
            explanation: "Hepatic steatosis causes increased liver echogenicity due to fatty infiltration."
        },
        {
            id: 8,
            type: "multipleChoice",
            question: "The portal triad consists of:",
            options: ["Portal vein, hepatic artery, bile duct", "Portal vein, hepatic vein, bile duct", "Hepatic artery, hepatic vein, bile duct", "Portal vein, hepatic artery, hepatic vein"],
            correct: 0,
            explanation: "The portal triad contains the portal vein, hepatic artery, and bile duct."
        },
        {
            id: 9,
            type: "trueFalse",
            question: "The middle hepatic vein separates the right and left hepatic lobes.",
            correct: true,
            explanation: "The middle hepatic vein defines the anatomical division between right and left hepatic lobes."
        },
        {
            id: 10,
            type: "trueFalse",
            question: "Segment IV is located in the right lobe of the liver.",
            correct: false,
            explanation: "Segment IV (quadrate lobe) is part of the left lobe despite its anatomical position."
        },
        {
            id: 11,
            type: "shortAnswer",
            question: "What is the normal diameter of the main portal vein?",
            answer: "13 mm",
            explanation: "The normal main portal vein diameter should not exceed 13 mm at the porta hepatis."
        },
        {
            id: 12,
            type: "shortAnswer",
            question: "Which hepatic segment has dual blood supply?",
            answer: "Segment I",
            explanation: "Segment I (caudate lobe) receives blood from both right and left portal systems."
        }
    ],

    // GALLBLADDER AND BILIARY SYSTEM
    gallbladder: [
        {
            id: 13,
            type: "multipleChoice",
            question: "Normal gallbladder wall thickness should not exceed:",
            options: ["1 mm", "3 mm", "5 mm", "8 mm"],
            correct: 1,
            explanation: "Normal gallbladder wall thickness should not exceed 3 mm when properly distended."
        },
        {
            id: 14,
            type: "multipleChoice",
            question: "The most sensitive sign of acute cholecystitis is:",
            options: ["Gallbladder wall thickening", "Pericholecystic fluid", "Sonographic Murphy's sign", "Gallstones"],
            correct: 2,
            explanation: "Sonographic Murphy's sign (tenderness over the gallbladder during scanning) is the most sensitive sign."
        },
        {
            id: 15,
            type: "multipleChoice",
            question: "Normal common bile duct diameter in adults under 60 should not exceed:",
            options: ["4 mm", "6 mm", "8 mm", "10 mm"],
            correct: 1,
            explanation: "Normal CBD diameter is <6 mm in adults under 60, may increase 1 mm per decade after 60."
        },
        {
            id: 16,
            type: "multipleChoice",
            question: "Courvoisier's law refers to:",
            options: ["Contracted gallbladder with stones", "Dilated gallbladder without stones", "Thick gallbladder wall", "Multiple gallstones"],
            correct: 1,
            explanation: "Courvoisier's law: painless jaundice with palpable gallbladder suggests malignant obstruction."
        },
        {
            id: 17,
            type: "multipleChoice",
            question: "The most common cause of acute cholecystitis is:",
            options: ["Bacterial infection", "Cystic duct obstruction", "Arterial occlusion", "Trauma"],
            correct: 1,
            explanation: "Acute cholecystitis is most commonly caused by cystic duct obstruction from gallstones."
        },
        {
            id: 18,
            type: "multipleChoice",
            question: "Gallbladder sludge appears as:",
            options: ["Echogenic with shadowing", "Anechoic", "Low-level echoes without shadowing", "Calcified"],
            correct: 2,
            explanation: "Sludge appears as low-level echoes that layer dependently without acoustic shadowing."
        },
        {
            id: 19,
            type: "trueFalse",
            question: "Gallstones always cause posterior acoustic shadowing.",
            correct: false,
            explanation: "Small stones or cholesterol stones may not always produce acoustic shadowing."
        },
        {
            id: 20,
            type: "trueFalse",
            question: "The cystic artery is a branch of the hepatic artery.",
            correct: true,
            explanation: "The cystic artery typically arises from the right hepatic artery."
        },
        {
            id: 21,
            type: "shortAnswer",
            question: "What is the term for gas in the biliary tree?",
            answer: "Pneumobilia",
            explanation: "Pneumobilia refers to gas in the biliary system, appearing as echogenic foci with ring-down artifacts."
        }
    ],

    // KIDNEY AND URINARY TRACT
    kidney: [
        {
            id: 22,
            type: "multipleChoice",
            question: "Normal adult kidney length ranges from:",
            options: ["8-10 cm", "10-12 cm", "12-15 cm", "15-18 cm"],
            correct: 1,
            explanation: "Normal adult kidney length is 10-12 cm, with acceptable range of 9-13 cm."
        },
        {
            id: 23,
            type: "multipleChoice",
            question: "The renal cortex should be _______ compared to the liver:",
            options: ["More echogenic", "Less echogenic", "Isoechoic", "Anechoic"],
            correct: 1,
            explanation: "Normal renal cortex is slightly less echogenic (hypoechoic) compared to liver parenchyma."
        },
        {
            id: 24,
            type: "multipleChoice",
            question: "Normal renal resistive index should be:",
            options: ["<0.5", "<0.7", "<0.8", "<0.9"],
            correct: 1,
            explanation: "Normal renal resistive index should be less than 0.7 in healthy adults."
        },
        {
            id: 25,
            type: "multipleChoice",
            question: "Hydronephrosis is graded based on:",
            options: ["Kidney size", "Cortical thickness", "Pelvic dilatation", "Resistive index"],
            correct: 2,
            explanation: "Hydronephrosis grading is based on the degree of pelvic and calyceal dilatation."
        },
        {
            id: 26,
            type: "multipleChoice",
            question: "The most common renal malignancy in adults is:",
            options: ["Wilms tumor", "Renal cell carcinoma", "Transitional cell carcinoma", "Lymphoma"],
            correct: 1,
            explanation: "Renal cell carcinoma is the most common primary renal malignancy in adults."
        },
        {
            id: 27,
            type: "multipleChoice",
            question: "Normal cortical thickness should measure:",
            options: ["0.5-1 cm", "1-1.5 cm", "1.5-2 cm", "2-2.5 cm"],
            correct: 1,
            explanation: "Normal renal cortical thickness measures 1-1.5 cm."
        },
        {
            id: 28,
            type: "trueFalse",
            question: "Adult polycystic kidney disease is autosomal dominant.",
            correct: true,
            explanation: "ADPKD is inherited as an autosomal dominant trait with high penetrance."
        },
        {
            id: 29,
            type: "trueFalse",
            question: "Renal pyramids are normally hyperechoic.",
            correct: false,
            explanation: "Renal pyramids (medulla) are normally hypoechoic compared to the cortex."
        },
        {
            id: 30,
            type: "shortAnswer",
            question: "What structure separates the renal cortex from medulla?",
            answer: "Corticomedullary junction",
            explanation: "The corticomedullary junction is the boundary between cortex and medullary pyramids."
        }
    ],

    // PANCREAS
    pancreas: [
        {
            id: 31,
            type: "multipleChoice",
            question: "Normal pancreatic duct diameter should not exceed:",
            options: ["1 mm", "2 mm", "3 mm", "4 mm"],
            correct: 1,
            explanation: "Normal pancreatic duct (Wirsung) should not exceed 2 mm in diameter."
        },
        {
            id: 32,
            type: "multipleChoice",
            question: "The uncinate process is part of the pancreatic:",
            options: ["Head", "Neck", "Body", "Tail"],
            correct: 0,
            explanation: "The uncinate process is part of the pancreatic head, hooking around the SMA."
        },
        {
            id: 33,
            type: "multipleChoice",
            question: "Normal pancreatic echogenicity should be:",
            options: ["Hypoechoic to liver", "Isoechoic to liver", "Hyperechoic to liver", "Anechoic"],
            correct: 1,
            explanation: "Normal pancreatic parenchyma should be isoechoic to the liver."
        },
        {
            id: 34,
            type: "multipleChoice",
            question: "The pancreatic body thickness should not exceed:",
            options: ["1.5 cm", "2.0 cm", "2.5 cm", "3.0 cm"],
            correct: 1,
            explanation: "Normal pancreatic body thickness should not exceed 2.0 cm."
        },
        {
            id: 35,
            type: "multipleChoice",
            question: "Which vessel passes posterior to the pancreatic neck?",
            options: ["Splenic vein", "Superior mesenteric artery", "Superior mesenteric vein", "Portal vein"],
            correct: 2,
            explanation: "The superior mesenteric vein passes directly posterior to the pancreatic neck."
        },
        {
            id: 36,
            type: "trueFalse",
            question: "Pancreatic divisum involves failure of ductal fusion.",
            correct: true,
            explanation: "Pancreatic divisum results from failure of fusion between dorsal and ventral pancreatic ducts."
        },
        {
            id: 37,
            type: "shortAnswer",
            question: "What is the name of the main pancreatic duct?",
            answer: "Duct of Wirsung",
            explanation: "The main pancreatic duct is called the duct of Wirsung."
        }
    ],

    // SPLEEN
    spleen: [
        {
            id: 38,
            type: "multipleChoice",
            question: "Normal splenic length should not exceed:",
            options: ["8 cm", "10 cm", "12 cm", "15 cm"],
            correct: 2,
            explanation: "Normal adult spleen length should not exceed 12 cm in the longest dimension."
        },
        {
            id: 39,
            type: "multipleChoice",
            question: "The most common primary splenic malignancy is:",
            options: ["Hemangioma", "Lymphoma", "Sarcoma", "Metastasis"],
            correct: 1,
            explanation: "Lymphoma is the most common primary splenic malignancy."
        },
        {
            id: 40,
            type: "multipleChoice",
            question: "Normal splenic volume should not exceed:",
            options: ["150 ml", "200 ml", "250 ml", "300 ml"],
            correct: 2,
            explanation: "Normal adult splenic volume should not exceed 250 ml."
        },
        {
            id: 41,
            type: "trueFalse",
            question: "The splenic artery has a characteristic tortuous course.",
            correct: true,
            explanation: "The splenic artery characteristically demonstrates a tortuous, serpentine course."
        },
        {
            id: 42,
            type: "shortAnswer",
            question: "Which vein does the splenic vein join to form the portal vein?",
            answer: "Superior mesenteric vein",
            explanation: "The splenic vein joins the superior mesenteric vein to form the portal vein."
        }
    ],

    // ABDOMINAL VASCULAR
    vascular: [
        {
            id: 43,
            type: "multipleChoice",
            question: "Normal abdominal aorta diameter should not exceed:",
            options: ["2.0 cm", "2.5 cm", "3.0 cm", "3.5 cm"],
            correct: 2,
            explanation: "Normal abdominal aorta diameter should not exceed 3.0 cm; >3 cm indicates aneurysm."
        },
        {
            id: 44,
            type: "multipleChoice",
            question: "The IVC diameter normally varies with:",
            options: ["Heart rate", "Blood pressure", "Respiration", "Body position"],
            correct: 2,
            explanation: "IVC diameter varies with respiration, increasing with inspiration and decreasing with expiration."
        },
        {
            id: 45,
            type: "multipleChoice",
            question: "Portal hypertension is defined as pressure greater than:",
            options: ["5 mmHg", "10 mmHg", "12 mmHg", "15 mmHg"],
            correct: 2,
            explanation: "Portal hypertension is defined as portal pressure >12 mmHg above IVC pressure."
        },
        {
            id: 46,
            type: "trueFalse",
            question: "Normal portal vein flow is hepatopetal.",
            correct: true,
            explanation: "Normal portal vein flow is hepatopetal (toward the liver)."
        }
    ],

    // ADRENAL GLANDS
    adrenal: [
        {
            id: 47,
            type: "multipleChoice",
            question: "The right adrenal gland is typically located:",
            options: ["Superior to right kidney", "Medial to right kidney", "Posterior to IVC", "All of the above"],
            correct: 3,
            explanation: "The right adrenal gland is located superior and medial to the right kidney, posterior to the IVC."
        },
        {
            id: 48,
            type: "multipleChoice",
            question: "Normal adrenal gland thickness should not exceed:",
            options: ["5 mm", "10 mm", "15 mm", "20 mm"],
            correct: 1,
            explanation: "Normal adrenal gland thickness should not exceed 10 mm."
        },
        {
            id: 49,
            type: "trueFalse",
            question: "The left adrenal gland is more easily visualized than the right.",
            correct: true,
            explanation: "The left adrenal is more easily seen due to its location relative to the spleen and kidney."
        }
    ],

    // GASTROINTESTINAL TRACT
    gastrointestinal: [
        {
            id: 50,
            type: "multipleChoice",
            question: "Normal bowel wall thickness should not exceed:",
            options: ["2 mm", "3 mm", "5 mm", "8 mm"],
            correct: 2,
            explanation: "Normal bowel wall thickness should not exceed 5 mm when distended."
        },
        {
            id: 51,
            type: "multipleChoice",
            question: "The target sign is characteristic of:",
            options: ["Appendicitis", "Intussusception", "Bowel obstruction", "Perforation"],
            correct: 1,
            explanation: "The target or doughnut sign is characteristic of intussusception."
        },
        {
            id: 52,
            type: "trueFalse",
            question: "Peristalsis can be observed with ultrasound.",
            correct: true,
            explanation: "Real-time ultrasound can demonstrate normal peristaltic waves in bowel."
        }
    ],

    // RETROPERITONEUM
    retroperitoneum: [
        {
            id: 53,
            type: "multipleChoice",
            question: "The retroperitoneal space contains:",
            options: ["Kidneys only", "Kidneys and adrenals", "Kidneys, adrenals, and pancreas", "All abdominal organs"],
            correct: 2,
            explanation: "The retroperitoneum contains kidneys, adrenal glands, pancreas, and major vessels."
        },
        {
            id: 54,
            type: "multipleChoice",
            question: "Retroperitoneal lymph nodes are considered enlarged when they exceed:",
            options: ["5 mm", "10 mm", "15 mm", "20 mm"],
            correct: 1,
            explanation: "Retroperitoneal lymph nodes >10 mm in short axis are considered enlarged."
        }
    ],

    // ABDOMINAL WALL AND SUPERFICIAL STRUCTURES
    abdominalWall: [
        {
            id: 55,
            type: "multipleChoice",
            question: "The rectus abdominis muscle is separated by:",
            options: ["Linea alba", "Linea semilunaris", "Arcuate line", "Inguinal ligament"],
            correct: 0,
            explanation: "The linea alba separates the right and left rectus abdominis muscles."
        },
        {
            id: 56,
            type: "multipleChoice",
            question: "Diastasis recti refers to:",
            options: ["Muscle tear", "Separation of rectus muscles", "Hernia", "Hematoma"],
            correct: 1,
            explanation: "Diastasis recti is separation of the rectus abdominis muscles at the linea alba."
        }
    ]
};

// Export the question database
if (typeof module !== 'undefined' && module.exports) {
    module.exports = questionDatabase;
}