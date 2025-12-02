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
        },
        {
            id: 13,
            type: "multipleChoice",
            question: "Focal nodular hyperplasia typically demonstrates:",
            options: ["Central scar", "Peripheral calcification", "Fatty infiltration", "Cystic degeneration"],
            correct: 0,
            explanation: "FNH characteristically shows a central stellate scar on imaging."
        },
        {
            id: 14,
            type: "multipleChoice",
            question: "Normal hepatic artery resistive index should be:",
            options: ["<0.5", "0.5-0.7", "0.7-0.8", ">0.8"],
            correct: 1,
            explanation: "Normal hepatic artery RI is typically 0.5-0.7, higher values suggest pathology."
        },
        {
            id: 15,
            type: "trueFalse",
            question: "Budd-Chiari syndrome involves hepatic vein occlusion.",
            correct: true,
            explanation: "Budd-Chiari syndrome is characterized by hepatic vein or IVC outflow obstruction."
        },
        {
            id: 16,
            type: "imageReference",
            question: "A hypoechoic liver lesion with posterior enhancement is most suggestive of:",
            imageDescription: "Liver ultrasound showing well-defined hypoechoic lesion with increased through-transmission",
            options: ["Simple cyst", "Hemangioma", "Hepatocellular carcinoma", "Metastasis"],
            correct: 0,
            explanation: "Simple hepatic cysts are anechoic/hypoechoic with posterior acoustic enhancement."
        },
        {
            id: 17,
            type: "multipleChoice",
            question: "Portal vein thrombosis appears as:",
            options: ["Absent flow signal", "Echogenic material in lumen", "Both A and B", "Neither A nor B"],
            correct: 2,
            explanation: "Portal vein thrombosis shows echogenic thrombus and absent/reduced Doppler flow."
        },
        {
            id: 18,
            type: "multipleChoice",
            question: "The hepatic veins drain into:",
            options: ["Portal vein", "Inferior vena cava", "Hepatic artery", "Common bile duct"],
            correct: 1,
            explanation: "The hepatic veins (right, middle, left) drain directly into the inferior vena cava."
        },
        {
            id: 19,
            type: "trueFalse",
            question: "Cirrhosis typically causes liver surface nodularity and increased echogenicity.",
            correct: true,
            explanation: "Cirrhotic changes include surface irregularity, coarse echotexture, and increased echogenicity."
        },
        {
            id: 20,
            type: "multipleChoice",
            question: "Wilson's disease primarily affects which organ initially?",
            options: ["Brain", "Liver", "Kidneys", "Lungs"],
            correct: 1,
            explanation: "Wilson's disease typically presents with hepatic manifestations before neurological symptoms."
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
        },
        {
            id: 22,
            type: "multipleChoice",
            question: "Mirizzi syndrome is characterized by:",
            options: ["CBD obstruction by GB stone", "Cystic artery aneurysm", "GB wall calcification", "Cholecystoenteric fistula"],
            correct: 0,
            explanation: "Mirizzi syndrome involves CBD obstruction from an impacted stone in the GB neck/cystic duct."
        },
        {
            id: 23,
            type: "multipleChoice",
            question: "Adenomyomatosis of the gallbladder demonstrates:",
            options: ["Wall thinning", "Comet-tail artifacts", "Increased vascularity", "Pericholecystic fluid"],
            correct: 1,
            explanation: "Adenomyomatosis shows comet-tail artifacts from cholesterol deposits in Rokitansky-Aschoff sinuses."
        },
        {
            id: 24,
            type: "imageReference",
            question: "A fixed echogenic focus in the GB wall without shadowing represents:",
            imageDescription: "Gallbladder ultrasound showing small echogenic focus attached to wall",
            options: ["Gallstone", "Polyp", "Sludge", "Adenomyomatosis"],
            correct: 1,
            explanation: "Fixed, non-shadowing echogenic foci attached to the GB wall are characteristic of polyps."
        },
        {
            id: 25,
            type: "trueFalse",
            question: "Porcelain gallbladder increases risk of malignancy.",
            correct: true,
            explanation: "Porcelain GB (calcified wall) is associated with increased risk of gallbladder carcinoma."
        },
        {
            id: 26,
            type: "multipleChoice",
            question: "The spiral valves of Heister are located in:",
            options: ["Gallbladder fundus", "Gallbladder body", "Cystic duct", "Common bile duct"],
            correct: 2,
            explanation: "The spiral valves of Heister are normal anatomical folds within the cystic duct."
        },
        {
            id: 27,
            type: "multipleChoice",
            question: "Gallbladder carcinoma most commonly appears as:",
            options: ["Wall thickening", "Intraluminal mass", "Both A and B", "Calcified mass"],
            correct: 2,
            explanation: "Gallbladder carcinoma can present as focal or diffuse wall thickening or as an intraluminal mass."
        },
        {
            id: 28,
            type: "trueFalse",
            question: "Acalculous cholecystitis is more common than calculous cholecystitis.",
            correct: false,
            explanation: "Calculous cholecystitis (with stones) is much more common than acalculous cholecystitis."
        },
        {
            id: 29,
            type: "multipleChoice",
            question: "The WES sign refers to:",
            options: ["Wall-Echo-Shadow complex", "Wide-Echogenic-Stripe", "Wall-Enhancement-Shadowing", "Water-Echo-Sludge"],
            correct: 0,
            explanation: "WES sign (Wall-Echo-Shadow) indicates a stone-filled, contracted gallbladder."
        },
        {
            id: 30,
            type: "multipleChoice",
            question: "Cholecystoenteric anastomosis appears as:",
            options: ["GB wall thickening", "Pneumobilia", "Gallstones", "Sludge"],
            correct: 1,
            explanation: "Surgical cholecystoenteric connections often result in pneumobilia from reflux of bowel gas."
        },
        {
            id: 31,
            type: "shortAnswer",
            question: "What is the normal fasting gallbladder volume?",
            answer: "30-50 mL",
            explanation: "Normal fasting gallbladder volume ranges from 30-50 mL in healthy adults."
        },
        {
            id: 32,
            type: "multipleChoice",
            question: "Xanthogranulomatous cholecystitis is characterized by:",
            options: ["Thin GB wall", "Hypoechoic nodules in wall", "Calcified GB", "Polyps"],
            correct: 1,
            explanation: "Xanthogranulomatous cholecystitis shows hypoechoic intramural nodules representing lipid-laden macrophages."
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
        },
        {
            id: 31,
            type: "multipleChoice",
            question: "Renal artery stenosis >60% demonstrates PSV of:",
            options: [">120 cm/s", ">150 cm/s", ">180 cm/s", ">200 cm/s"],
            correct: 2,
            explanation: "Renal artery PSV >180 cm/s indicates significant (>60%) stenosis."
        },
        {
            id: 32,
            type: "multipleChoice",
            question: "Acute tubular necrosis typically shows:",
            options: ["Increased cortical echogenicity", "Decreased cortical echogenicity", "Normal echogenicity", "Cystic changes"],
            correct: 0,
            explanation: "ATN often causes increased cortical echogenicity due to cellular swelling and debris."
        },
        {
            id: 33,
            type: "imageReference",
            question: "Multiple anechoic lesions in both kidneys suggest:",
            imageDescription: "Bilateral kidneys with multiple round anechoic lesions of varying sizes",
            options: ["Simple cysts", "Polycystic kidney disease", "Renal cell carcinoma", "Lymphoma"],
            correct: 1,
            explanation: "Multiple bilateral cysts are characteristic of polycystic kidney disease."
        },
        {
            id: 34,
            type: "trueFalse",
            question: "Column of Bertin can mimic a renal mass.",
            correct: true,
            explanation: "Prominent columns of Bertin (cortical tissue) can simulate renal masses on imaging."
        },
        {
            id: 35,
            type: "multipleChoice",
            question: "Nephrolithiasis appears as:",
            options: ["Hypoechoic with enhancement", "Echogenic with shadowing", "Anechoic", "Isoechoic"],
            correct: 1,
            explanation: "Kidney stones appear as echogenic foci with posterior acoustic shadowing."
        },
        {
            id: 36,
            type: "multipleChoice",
            question: "The most common location for renal cell carcinoma is:",
            options: ["Upper pole", "Lower pole", "Mid-kidney", "No preference"],
            correct: 0,
            explanation: "RCC most commonly occurs in the upper pole of the kidney."
        },
        {
            id: 37,
            type: "trueFalse",
            question: "Chronic kidney disease causes increased cortical echogenicity.",
            correct: true,
            explanation: "CKD typically results in increased cortical echogenicity and loss of corticomedullary differentiation."
        },
        {
            id: 38,
            type: "multipleChoice",
            question: "Acute pyelonephritis may demonstrate:",
            options: ["Focal hypoechoic areas", "Decreased perfusion", "Swollen kidney", "All of the above"],
            correct: 3,
            explanation: "Acute pyelonephritis can show focal hypoechoic regions, decreased perfusion, and renal enlargement."
        },
        {
            id: 39,
            type: "shortAnswer",
            question: "What is the normal renal cortical/hepatic echogenicity ratio?",
            answer: "0.8-1.0",
            explanation: "Normal renal cortex should be 80-100% the echogenicity of liver parenchyma."
        },
        {
            id: 40,
            type: "multipleChoice",
            question: "Renal vein thrombosis most commonly occurs in:",
            options: ["Elderly patients", "Neonates", "Young adults", "Teenagers"],
            correct: 1,
            explanation: "Renal vein thrombosis has a bimodal distribution, most common in neonates and elderly."
        },
        {
            id: 41,
            type: "multipleChoice",
            question: "Angiomyolipoma characteristically contains:",
            options: ["Fat tissue", "Calcification", "Necrosis", "Hemorrhage"],
            correct: 0,
            explanation: "Angiomyolipomas contain fat, which appears hyperechoic on ultrasound."
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
        },
        {
            id: 38,
            type: "multipleChoice",
            question: "Chronic pancreatitis typically demonstrates:",
            options: ["Decreased echogenicity", "Increased echogenicity", "Normal echogenicity", "Anechoic areas"],
            correct: 1,
            explanation: "Chronic pancreatitis causes increased pancreatic echogenicity due to fibrosis and calcification."
        },
        {
            id: 39,
            type: "multipleChoice",
            question: "The most common cause of acute pancreatitis is:",
            options: ["Alcohol", "Gallstones", "Trauma", "Medications"],
            correct: 1,
            explanation: "Gallstone impaction at the ampulla of Vater is the most common cause of acute pancreatitis."
        },
        {
            id: 40,
            type: "trueFalse",
            question: "Pancreatic pseudocysts have true epithelial lining.",
            correct: false,
            explanation: "Pseudocysts lack true epithelial lining, unlike true pancreatic cysts."
        },
        {
            id: 41,
            type: "multipleChoice",
            question: "The accessory pancreatic duct is called:",
            options: ["Duct of Wirsung", "Duct of Santorini", "Duct of Luschka", "Duct of Rivinus"],
            correct: 1,
            explanation: "The accessory pancreatic duct is known as the duct of Santorini."
        },
        {
            id: 42,
            type: "multipleChoice",
            question: "Pancreatic adenocarcinoma most commonly occurs in:",
            options: ["Head", "Neck", "Body", "Tail"],
            correct: 0,
            explanation: "Approximately 70% of pancreatic adenocarcinomas occur in the pancreatic head."
        },
        {
            id: 43,
            type: "trueFalse",
            question: "IPMN (Intraductal Papillary Mucinous Neoplasm) can be malignant.",
            correct: true,
            explanation: "IPMNs have malignant potential and require surveillance or resection depending on features."
        },
        {
            id: 44,
            type: "multipleChoice",
            question: "Normal pancreatic head thickness should not exceed:",
            options: ["2.0 cm", "2.5 cm", "3.0 cm", "3.5 cm"],
            correct: 2,
            explanation: "Normal pancreatic head thickness should not exceed 3.0 cm."
        },
        {
            id: 45,
            type: "shortAnswer",
            question: "What enzyme is elevated in acute pancreatitis?",
            answer: "Lipase",
            explanation: "Serum lipase is more specific and remains elevated longer than amylase in acute pancreatitis."
        },
        {
            id: 46,
            type: "multipleChoice",
            question: "Groove pancreatitis affects the:",
            options: ["Pancreaticoduodenal groove", "Splenic hilum", "Pancreatic tail", "Uncinate process"],
            correct: 0,
            explanation: "Groove pancreatitis involves the pancreaticoduodenal groove between duodenum and pancreatic head."
        },
        {
            id: 47,
            type: "multipleChoice",
            question: "Annular pancreas is associated with:",
            options: ["Duodenal obstruction", "Splenic infarction", "Portal hypertension", "Renal failure"],
            correct: 0,
            explanation: "Annular pancreas can cause duodenal narrowing and obstruction, especially in neonates."
        },
        {
            id: 48,
            type: "trueFalse",
            question: "Pancreatic islet cell tumors are usually hyperechoic.",
            correct: false,
            explanation: "Islet cell tumors (neuroendocrine tumors) are typically hypoechoic on ultrasound."
        },
        {
            id: 49,
            type: "multipleChoice",
            question: "Whipple procedure removes:",
            options: ["Pancreatic tail", "Pancreatic head and duodenum", "Entire pancreas", "Pancreatic body"],
            correct: 1,
            explanation: "Pancreaticoduodenectomy (Whipple) removes pancreatic head, duodenum, and parts of stomach and bile duct."
        },
        {
            id: 50,
            type: "multipleChoice",
            question: "Pancreatic lipomatosis appears as:",
            options: ["Hypoechoic", "Hyperechoic", "Anechoic", "Mixed echogenicity"],
            correct: 1,
            explanation: "Pancreatic lipomatosis shows increased echogenicity due to fatty infiltration."
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
        },
        {
            id: 43,
            type: "multipleChoice",
            question: "Splenic infarction appears as:",
            options: ["Hyperechoic area", "Hypoechoic area", "Anechoic area", "Mixed echogenicity"],
            correct: 1,
            explanation: "Acute splenic infarction typically appears as a hypoechoic wedge-shaped area."
        },
        {
            id: 44,
            type: "multipleChoice",
            question: "Splenomegaly is most commonly caused by:",
            options: ["Trauma", "Infection", "Portal hypertension", "Neoplasm"],
            correct: 2,
            explanation: "Portal hypertension from liver disease is the most common cause of splenomegaly."
        },
        {
            id: 45,
            type: "trueFalse",
            question: "Accessory spleens are found in approximately 10% of the population.",
            correct: true,
            explanation: "Accessory spleens (splenunculi) are found in about 10% of people, usually near the splenic hilum."
        },
        {
            id: 46,
            type: "multipleChoice",
            question: "Splenic hemangiomas are typically:",
            options: ["Hypoechoic", "Hyperechoic", "Anechoic", "Calcified"],
            correct: 1,
            explanation: "Splenic hemangiomas are typically hyperechoic, similar to hepatic hemangiomas."
        },
        {
            id: 47,
            type: "multipleChoice",
            question: "The hilum of the spleen contains:",
            options: ["Only splenic artery", "Only splenic vein", "Splenic vessels and pancreatic tail", "Lymph nodes only"],
            correct: 2,
            explanation: "The splenic hilum contains splenic vessels, lymph nodes, and the pancreatic tail."
        },
        {
            id: 48,
            type: "trueFalse",
            question: "Splenic rupture always causes free fluid in the abdomen.",
            correct: false,
            explanation: "Small splenic lacerations may not produce detectable free fluid initially."
        },
        {
            id: 49,
            type: "multipleChoice",
            question: "Gaucher disease affects the spleen by causing:",
            options: ["Atrophy", "Infiltration and enlargement", "Calcification", "Cyst formation"],
            correct: 1,
            explanation: "Gaucher disease causes splenic enlargement due to glucocerebroside accumulation."
        },
        {
            id: 50,
            type: "shortAnswer",
            question: "What is the normal splenic index calculation?",
            answer: "Length × width × thickness",
            explanation: "Splenic index is calculated as length × width × thickness, normal <480 cm³."
        },
        {
            id: 51,
            type: "multipleChoice",
            question: "Splenic cysts are most commonly:",
            options: ["Parasitic", "Congenital", "Traumatic", "Neoplastic"],
            correct: 2,
            explanation: "Post-traumatic pseudocysts are the most common type of splenic cyst."
        },
        {
            id: 52,
            type: "trueFalse",
            question: "The spleen has a dual blood supply like the liver.",
            correct: false,
            explanation: "The spleen has a single arterial supply via the splenic artery, unlike the liver's dual supply."
        },
        {
            id: 53,
            type: "multipleChoice",
            question: "Splenic candidiasis appears as:",
            options: ["Single large lesion", "Multiple small hypoechoic lesions", "Calcified lesions", "Hyperechoic lesions"],
            correct: 1,
            explanation: "Splenic candidiasis typically presents as multiple small hypoechoic lesions."
        },
        {
            id: 54,
            type: "multipleChoice",
            question: "Wandering spleen is caused by:",
            options: ["Splenic enlargement", "Lax splenic ligaments", "Portal hypertension", "Trauma"],
            correct: 1,
            explanation: "Wandering spleen results from lax or absent splenic ligaments allowing abnormal mobility."
        },
        {
            id: 55,
            type: "trueFalse",
            question: "Splenic artery aneurysms are more common in women.",
            correct: true,
            explanation: "Splenic artery aneurysms are 4 times more common in women, often associated with pregnancy."
        },
        {
            id: 56,
            type: "multipleChoice",
            question: "Functional asplenia can be caused by:",
            options: ["Sickle cell disease", "Trauma", "Surgery", "All of the above"],
            correct: 3,
            explanation: "Functional asplenia can result from sickle cell disease, trauma, surgery, or other conditions."
        },
        {
            id: 57,
            type: "multipleChoice",
            question: "Splenic metastases most commonly originate from:",
            options: ["Lung", "Breast", "Melanoma", "Colon"],
            correct: 2,
            explanation: "Melanoma is the most common primary tumor to metastasize to the spleen."
        }
    ],

    // ABDOMINAL VASCULAR
    vascular: [
        {
            id: 58,
            type: "multipleChoice",
            question: "Normal abdominal aorta diameter should not exceed:",
            options: ["2.0 cm", "2.5 cm", "3.0 cm", "3.5 cm"],
            correct: 2,
            explanation: "Normal abdominal aorta diameter should not exceed 3.0 cm; >3 cm indicates aneurysm."
        },
        {
            id: 59,
            type: "multipleChoice",
            question: "The IVC diameter normally varies with:",
            options: ["Heart rate", "Blood pressure", "Respiration", "Body position"],
            correct: 2,
            explanation: "IVC diameter varies with respiration, increasing with inspiration and decreasing with expiration."
        },
        {
            id: 60,
            type: "multipleChoice",
            question: "Portal hypertension is defined as pressure greater than:",
            options: ["5 mmHg", "10 mmHg", "12 mmHg", "15 mmHg"],
            correct: 2,
            explanation: "Portal hypertension is defined as portal pressure >12 mmHg above IVC pressure."
        },
        {
            id: 61,
            type: "trueFalse",
            question: "Normal portal vein flow is hepatopetal.",
            correct: true,
            explanation: "Normal portal vein flow is hepatopetal (toward the liver)."
        },
        {
            id: 62,
            type: "multipleChoice",
            question: "Abdominal aortic aneurysm rupture risk increases significantly when diameter exceeds:",
            options: ["4.0 cm", "5.0 cm", "5.5 cm", "6.0 cm"],
            correct: 2,
            explanation: "AAA rupture risk increases significantly when diameter exceeds 5.5 cm."
        },
        {
            id: 63,
            type: "multipleChoice",
            question: "The celiac trunk gives rise to:",
            options: ["Left gastric, splenic, common hepatic arteries", "SMA, celiac, IMA", "Renal arteries", "Mesenteric arteries only"],
            correct: 0,
            explanation: "The celiac trunk trifurcates into left gastric, splenic, and common hepatic arteries."
        },
        {
            id: 64,
            type: "trueFalse",
            question: "IVC compression can cause lower extremity edema.",
            correct: true,
            explanation: "IVC obstruction or compression can impair venous return causing bilateral lower extremity edema."
        },
        {
            id: 65,
            type: "multipleChoice",
            question: "Normal portal vein velocity should be:",
            options: ["10-20 cm/s", "20-40 cm/s", "40-60 cm/s", "60-80 cm/s"],
            correct: 1,
            explanation: "Normal portal vein velocity ranges from 20-40 cm/s."
        },
        {
            id: 66,
            type: "shortAnswer",
            question: "What is the normal IVC diameter range?",
            answer: "1.5-2.5 cm",
            explanation: "Normal IVC diameter ranges from 1.5-2.5 cm, varying with respiration and patient habitus."
        },
        {
            id: 67,
            type: "multipleChoice",
            question: "Budd-Chiari syndrome involves occlusion of:",
            options: ["Portal vein", "Hepatic arteries", "Hepatic veins", "Splenic vein"],
            correct: 2,
            explanation: "Budd-Chiari syndrome involves hepatic vein or IVC outflow obstruction."
        },
        {
            id: 68,
            type: "multipleChoice",
            question: "Cavernous transformation of the portal vein indicates:",
            options: ["Portal vein thrombosis", "Portal hypertension", "Collateral formation", "All of the above"],
            correct: 3,
            explanation: "Cavernous transformation represents collateral vessels forming around thrombosed portal vein."
        },
        {
            id: 69,
            type: "trueFalse",
            question: "Aortic dissection can involve the abdominal aorta.",
            correct: true,
            explanation: "Type A dissections can extend into the abdominal aorta; Type B dissections originate there."
        },
        {
            id: 70,
            type: "multipleChoice",
            question: "Mesenteric ischemia most commonly affects:",
            options: ["Celiac territory", "SMA territory", "IMA territory", "Portal system"],
            correct: 1,
            explanation: "Acute mesenteric ischemia most commonly involves the SMA territory."
        },
        {
            id: 71,
            type: "multipleChoice",
            question: "Nutcracker syndrome involves compression of:",
            options: ["Left renal vein", "Right renal vein", "IVC", "Portal vein"],
            correct: 0,
            explanation: "Nutcracker syndrome involves compression of the left renal vein between aorta and SMA."
        },
        {
            id: 72,
            type: "trueFalse",
            question: "Retrograde flow in portal vein indicates portal hypertension.",
            correct: true,
            explanation: "Hepatofugal (retrograde) portal flow indicates severe portal hypertension."
        },
        {
            id: 73,
            type: "multipleChoice",
            question: "IVC filters are typically placed at level of:",
            options: ["Renal veins", "Hepatic veins", "Iliac confluence", "Right atrium"],
            correct: 0,
            explanation: "IVC filters are typically placed below the renal veins to prevent PE while preserving renal drainage."
        },
        {
            id: 74,
            type: "shortAnswer",
            question: "What artery supplies the pancreatic head?",
            answer: "Gastroduodenal artery",
            explanation: "The gastroduodenal artery and its branches supply the pancreatic head and duodenum."
        },
        {
            id: 75,
            type: "multipleChoice",
            question: "May-Thurner syndrome involves compression of:",
            options: ["Left common iliac vein", "Right common iliac vein", "IVC", "Portal vein"],
            correct: 0,
            explanation: "May-Thurner syndrome involves compression of left common iliac vein by right common iliac artery."
        },
        {
            id: 76,
            type: "trueFalse",
            question: "Collateral vessels indicate portal hypertension.",
            correct: true,
            explanation: "Development of portosystemic collaterals is a sign of portal hypertension."
        },
        {
            id: 77,
            type: "multipleChoice",
            question: "Normal renal artery peak systolic velocity should be:",
            options: ["<100 cm/s", "<150 cm/s", "<180 cm/s", "<200 cm/s"],
            correct: 2,
            explanation: "Normal renal artery PSV should be <180 cm/s; higher values suggest stenosis."
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
    ],

    // CASE STUDIES AND IMAGE-BASED QUESTIONS
    caseStudies: [
        {
            id: 57,
            type: "caseStudy",
            question: "A 45-year-old female presents with RUQ pain and fever. Ultrasound shows GB wall thickening of 5mm, pericholecystic fluid, and positive sonographic Murphy's sign. What is the most likely diagnosis?",
            options: ["Chronic cholecystitis", "Acute cholecystitis", "Cholangitis", "GB carcinoma"],
            correct: 1,
            explanation: "Classic triad of acute cholecystitis: wall thickening >3mm, pericholecystic fluid, and positive Murphy's sign."
        },
        {
            id: 58,
            type: "imageReference",
            question: "This liver lesion with central scar and spoke-wheel vascularity is most consistent with:",
            imageDescription: "Liver ultrasound showing hyperechoic lesion with central hypoechoic scar",
            imagePlaceholder: "liver_fnh_pattern.svg",
            options: ["Hemangioma", "Focal nodular hyperplasia", "Hepatocellular carcinoma", "Metastasis"],
            correct: 1,
            explanation: "FNH characteristically shows central scar with spoke-wheel vascular pattern on Doppler."
        },
        {
            id: 59,
            type: "measurementChallenge",
            question: "Based on this aortic measurement, what is your assessment?",
            imageDescription: "Transverse aorta measurement showing 3.8 cm diameter",
            imagePlaceholder: "aorta_aneurysm_measurement.svg",
            options: ["Normal aorta", "Mild ectasia", "Abdominal aortic aneurysm", "Aortic dissection"],
            correct: 2,
            explanation: "Aortic diameter >3.0 cm indicates aneurysm; 3.8 cm represents moderate AAA requiring monitoring."
        },
        {
            id: 60,
            type: "doppler",
            question: "This renal artery Doppler waveform shows PSV of 220 cm/s with tardus parvus pattern. This indicates:",
            imageDescription: "Renal artery Doppler showing high velocity with delayed systolic upstroke",
            imagePlaceholder: "renal_artery_stenosis_doppler.svg",
            options: ["Normal flow", "Mild stenosis <50%", "Moderate stenosis 50-70%", "Severe stenosis >70%"],
            correct: 3,
            explanation: "PSV >180 cm/s with tardus parvus waveform indicates severe renal artery stenosis >70%."
        },
        {
            id: 61,
            type: "pathology",
            question: "A patient with cirrhosis shows this portal vein Doppler pattern. The finding represents:",
            imageDescription: "Portal vein Doppler showing flow away from liver (hepatofugal)",
            imagePlaceholder: "portal_vein_reversal.svg",
            options: ["Normal portal flow", "Increased portal flow", "Reversed portal flow", "Absent portal flow"],
            correct: 2,
            explanation: "Hepatofugal (reversed) portal flow indicates severe portal hypertension in cirrhosis."
        }
    ],

    // PHYSICS AND TECHNIQUE QUESTIONS
    physics: [
        {
            id: 62,
            type: "multipleChoice",
            question: "To improve visualization of a deep abdominal structure, you should:",
            options: ["Increase frequency", "Decrease frequency", "Increase gain only", "Use harmonics only"],
            correct: 1,
            explanation: "Lower frequencies penetrate deeper but with reduced resolution."
        },
        {
            id: 63,
            type: "multipleChoice",
            question: "Acoustic shadowing is most commonly caused by:",
            options: ["Fluid", "Gas", "Calcification", "Both B and C"],
            correct: 3,
            explanation: "Both gas and calcification cause acoustic shadowing by reflecting/absorbing sound waves."
        },
        {
            id: 64,
            type: "trueFalse",
            question: "Compound imaging reduces speckle artifact.",
            correct: true,
            explanation: "Compound imaging uses multiple beam angles to reduce speckle and improve image quality."
        }
    ]
};

// Export the question database
if (typeof module !== 'undefined' && module.exports) {
    module.exports = questionDatabase;
}