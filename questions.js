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
        },
        {
            id: 21,
            type: "multipleChoice",
            question: "The most common benign liver tumor is:",
            options: ["Focal nodular hyperplasia", "Hepatic adenoma", "Hemangioma", "Lipoma"],
            correct: 2,
            explanation: "Hemangioma is the most common benign liver tumor, typically appearing as a hyperechoic lesion."
        },
        {
            id: 22,
            type: "multipleChoice",
            question: "Portal vein thrombosis most commonly appears as:",
            options: ["Anechoic structure", "Hyperechoic material within vessel", "Vessel wall thickening", "Increased flow velocity"],
            correct: 1,
            explanation: "Portal vein thrombosis typically appears as hyperechoic or mixed echogenicity material within the portal vein."
        },
        {
            id: 23,
            type: "trueFalse",
            question: "Hepatic steatosis (fatty liver) typically increases liver echogenicity.",
            correct: true,
            explanation: "Fatty infiltration causes increased hepatic echogenicity and sound attenuation."
        },
        {
            id: 24,
            type: "multipleChoice",
            question: "The ligamentum teres divides which hepatic segments?",
            options: ["II and III", "III and IV", "IV and V", "V and VI"],
            correct: 1,
            explanation: "The ligamentum teres (round ligament) divides segments III and IV in the left lobe."
        },
        {
            id: 25,
            type: "multipleChoice",
            question: "Budd-Chiari syndrome involves thrombosis of:",
            options: ["Portal vein", "Hepatic veins", "Hepatic artery", "Bile ducts"],
            correct: 1,
            explanation: "Budd-Chiari syndrome is characterized by hepatic vein outflow obstruction."
        },
        {
            id: 26,
            type: "multipleChoice",
            question: "Normal hepatic artery resistive index should be:",
            options: ["0.4-0.6", "0.6-0.8", "0.8-1.0", ">1.0"],
            correct: 1,
            explanation: "Normal hepatic artery resistive index ranges from 0.6 to 0.8."
        },
        {
            id: 27,
            type: "trueFalse",
            question: "Hepatocellular carcinoma is more commonly hypoechoic than hyperechoic.",
            correct: true,
            explanation: "HCC is typically hypoechoic, though it can have variable echogenicity patterns."
        },
        {
            id: 28,
            type: "multipleChoice",
            question: "The most specific ultrasound finding for hepatic adenoma is:",
            options: ["Hyperechoic rim", "Central scar", "Heterogeneous echogenicity", "No specific finding"],
            correct: 3,
            explanation: "Hepatic adenomas have no pathognomonic ultrasound appearance and require further imaging."
        },
        {
            id: 29,
            type: "multipleChoice",
            question: "Glycogen storage disease most commonly affects which Couinaud segments?",
            options: ["I and IV", "All segments equally", "II and III", "V and VI"],
            correct: 1,
            explanation: "Glycogen storage disease typically shows diffuse involvement but may be more prominent in certain areas."
        },
        {
            id: 30,
            type: "trueFalse",
            question: "Portal hypertension always causes splenomegaly.",
            correct: false,
            explanation: "While splenomegaly is common in portal hypertension, it is not always present."
        },
        {
            id: 31,
            type: "multipleChoice",
            question: "The normal portal vein diameter should not exceed:",
            options: ["8 mm", "13 mm", "18 mm", "23 mm"],
            correct: 2,
            explanation: "Normal portal vein diameter should not exceed 13 mm in the fasting state."
        },
        {
            id: 32,
            type: "multipleChoice",
            question: "Focal nodular hyperplasia characteristically shows:",
            options: ["Peripheral vascularity", "Central scar with spoke-wheel pattern", "Rim enhancement", "Calcification"],
            correct: 1,
            explanation: "FNH typically shows a central scar with spoke-wheel vascular pattern on Doppler."
        },
        {
            id: 33,
            type: "trueFalse",
            question: "Hepatic veins normally show triphasic flow pattern.",
            correct: true,
            explanation: "Hepatic veins demonstrate triphasic flow related to cardiac cycle and right atrial pressure changes."
        },
        {
            id: 34,
            type: "multipleChoice",
            question: "Alpha-fetoprotein elevation is most associated with:",
            options: ["Hemangioma", "Hepatocellular carcinoma", "Focal nodular hyperplasia", "Hepatic adenoma"],
            correct: 1,
            explanation: "Elevated AFP is strongly associated with hepatocellular carcinoma."
        },
        {
            id: 35,
            type: "multipleChoice",
            question: "The hepatorenal recess is also known as:",
            options: ["Morrison's pouch", "Paracolic gutter", "Pelvis pouch", "Lesser sac"],
            correct: 0,
            explanation: "The hepatorenal recess is commonly called Morrison's pouch and is a dependent portion of the peritoneal cavity."
        },
        {
            id: 36,
            type: "trueFalse",
            question: "Hemochromatosis typically causes decreased hepatic echogenicity.",
            correct: false,
            explanation: "Hemochromatosis typically causes increased hepatic echogenicity due to iron deposition."
        },
        {
            id: 37,
            type: "multipleChoice",
            question: "Cavernous transformation of the portal vein appears as:",
            options: ["Single large vessel", "Multiple small collateral vessels", "Vessel wall thickening", "Anechoic mass"],
            correct: 1,
            explanation: "Cavernous transformation shows multiple small collateral vessels replacing the main portal vein."
        },
        {
            id: 38,
            type: "multipleChoice",
            question: "The most common location for hepatocellular carcinoma is:",
            options: ["Left lobe", "Right lobe", "Caudate lobe", "Equal distribution"],
            correct: 1,
            explanation: "HCC most commonly occurs in the right lobe of the liver."
        },
        {
            id: 39,
            type: "trueFalse",
            question: "Hepatic cysts require intervention if they exceed 5 cm.",
            correct: false,
            explanation: "Simple hepatic cysts are typically benign and do not require intervention based on size alone."
        },
        {
            id: 40,
            type: "multipleChoice",
            question: "Klatskin tumor occurs at the:",
            options: ["Hepatic hilum", "Gallbladder neck", "Ampulla of Vater", "Cystic duct"],
            correct: 0,
            explanation: "Klatskin tumor is a cholangiocarcinoma at the confluence of right and left hepatic ducts."
        },
        {
            id: 41,
            type: "multipleChoice",
            question: "Normal hepatic artery peak systolic velocity should be:",
            options: ["10-20 cm/s", "30-60 cm/s", "70-100 cm/s", ">100 cm/s"],
            correct: 1,
            explanation: "Normal hepatic artery PSV ranges from 30-60 cm/s."
        },
        {
            id: 42,
            type: "trueFalse",
            question: "Hepatic fibrosis can be assessed using ultrasound elastography.",
            correct: true,
            explanation: "Ultrasound elastography (FibroScan) is widely used to assess hepatic fibrosis non-invasively."
        },
        {
            id: 43,
            type: "multipleChoice",
            question: "Polycystic liver disease is most commonly associated with:",
            options: ["Autosomal dominant polycystic kidney disease", "Autosomal recessive polycystic kidney disease", "Acquired renal cystic disease", "No renal association"],
            correct: 0,
            explanation: "Polycystic liver disease is strongly associated with autosomal dominant polycystic kidney disease."
        },
        {
            id: 44,
            type: "multipleChoice",
            question: "The hepatic artery proper divides into:",
            options: ["Left and right hepatic arteries", "Common and proper hepatic arteries", "Gastroduodenal and right gastric arteries", "Cystic and hepatic arteries"],
            correct: 0,
            explanation: "The hepatic artery proper divides into left and right hepatic arteries at the liver hilum."
        },
        {
            id: 45,
            type: "trueFalse",
            question: "Hepatic lipomas are common benign liver lesions.",
            correct: false,
            explanation: "Hepatic lipomas are extremely rare; hemangiomas are the most common benign liver lesions."
        },
        {
            id: 46,
            type: "multipleChoice",
            question: "Fibrolamellar hepatocellular carcinoma typically occurs in:",
            options: ["Elderly patients with cirrhosis", "Young patients without cirrhosis", "Patients with hepatitis B", "Patients with alcoholic liver disease"],
            correct: 1,
            explanation: "Fibrolamellar HCC typically occurs in young patients without underlying liver disease."
        },
        {
            id: 47,
            type: "multipleChoice",
            question: "The middle hepatic vein drains segments:",
            options: ["II and III", "IV and V", "V and VIII", "VI and VII"],
            correct: 1,
            explanation: "The middle hepatic vein primarily drains segments IV and V."
        },
        {
            id: 48,
            type: "trueFalse",
            question: "Portal vein gas typically rises to non-dependent portions of the liver.",
            correct: true,
            explanation: "Portal vein gas (pneumoporta) rises to non-dependent areas, unlike biliary gas which layers dependently."
        },
        {
            id: 49,
            type: "multipleChoice",
            question: "Hepatic encephalopathy is most commonly caused by:",
            options: ["Hepatic artery stenosis", "Portal vein thrombosis", "Portosystemic shunting", "Bile duct obstruction"],
            correct: 2,
            explanation: "Hepatic encephalopathy results from portosystemic shunting allowing toxins to bypass hepatic metabolism."
        },
        {
            id: 50,
            type: "multipleChoice",
            question: "The ligamentum venosum separates which hepatic segments?",
            options: ["I and II", "II and IV", "I and IV", "III and IV"],
            correct: 0,
            explanation: "The ligamentum venosum separates the caudate lobe (segment I) from segment II."
        },
        {
            id: 51,
            type: "trueFalse",
            question: "Hepatic abscess typically shows increased through-transmission.",
            correct: true,
            explanation: "Hepatic abscesses often demonstrate increased through-transmission due to their fluid content."
        },
        {
            id: 52,
            type: "multipleChoice",
            question: "Contrast-enhanced ultrasound is most useful for:",
            options: ["Measuring liver size", "Assessing portal vein patency", "Characterizing focal liver lesions", "Evaluating bile ducts"],
            correct: 2,
            explanation: "CEUS is particularly valuable for characterizing focal liver lesions and their vascularity."
        },
        {
            id: 53,
            type: "multipleChoice",
            question: "Regenerative nodules in cirrhosis typically appear:",
            options: ["Hyperechoic", "Hypoechoic", "Isoechoic", "Anechoic"],
            correct: 2,
            explanation: "Regenerative nodules are typically isoechoic and may be difficult to detect on conventional ultrasound."
        },
        {
            id: 54,
            type: "trueFalse",
            question: "Hepatic trauma can cause subcapsular hematoma formation.",
            correct: true,
            explanation: "Blunt hepatic trauma commonly results in subcapsular hematomas, which appear as fluid collections beneath the liver capsule."
        },
        {
            id: 55,
            type: "multipleChoice",
            question: "The porta hepatis contains all of the following EXCEPT:",
            options: ["Portal vein", "Hepatic artery", "Bile duct", "Hepatic vein"],
            correct: 3,
            explanation: "The porta hepatis contains the portal triad (portal vein, hepatic artery, bile duct) but not hepatic veins."
        },
        {
            id: 56,
            type: "multipleChoice",
            question: "Hepatopulmonary syndrome is characterized by:",
            options: ["Liver and lung masses", "Intrapulmonary shunting", "Pleural effusion", "Pneumonia"],
            correct: 1,
            explanation: "Hepatopulmonary syndrome involves intrapulmonary vascular shunting in patients with liver disease."
        },
        {
            id: 57,
            type: "trueFalse",
            question: "Caudate lobe hypertrophy is characteristic of Budd-Chiari syndrome.",
            correct: true,
            explanation: "Caudate lobe hypertrophy occurs in Budd-Chiari syndrome due to its separate venous drainage to the IVC."
        },
        {
            id: 58,
            type: "multipleChoice",
            question: "Hepatic adenomatosis is defined as:",
            options: ["Single large adenoma >5 cm", "≥10 adenomas throughout liver", "Adenoma with malignant transformation", "Adenoma in diabetic patient"],
            correct: 1,
            explanation: "Hepatic adenomatosis is defined as 10 or more adenomas distributed throughout the liver."
        },
        {
            id: 59,
            type: "multipleChoice",
            question: "The most common cause of portal hypertension worldwide is:",
            options: ["Alcoholic cirrhosis", "Schistosomiasis", "Hepatitis B cirrhosis", "Non-alcoholic steatohepatitis"],
            correct: 1,
            explanation: "Schistosomiasis is the most common cause of portal hypertension globally, though alcoholic cirrhosis is more common in developed countries."
        },
        {
            id: 60,
            type: "trueFalse",
            question: "Hepatic artery aneurysm is more common than hepatic artery pseudoaneurysm.",
            correct: false,
            explanation: "Hepatic artery pseudoaneurysm is more common than true aneurysm, often associated with pancreatitis or trauma."
        },
        {
            id: 61,
            type: "multipleChoice",
            question: "Caroli disease involves:",
            options: ["Hepatic vein dilatation", "Intrahepatic bile duct dilatation", "Portal vein dilatation", "Hepatic artery dilatation"],
            correct: 1,
            explanation: "Caroli disease is characterized by congenital cystic dilatation of intrahepatic bile ducts."
        },
        {
            id: 62,
            type: "multipleChoice",
            question: "The best ultrasound approach for evaluating the left lobe of liver is:",
            options: ["Right subcostal", "Epigastric", "Left subcostal", "Intercostal"],
            correct: 1,
            explanation: "The epigastric approach provides optimal visualization of the left lobe of the liver."
        },
        {
            id: 63,
            type: "trueFalse",
            question: "Hepatic metastases are more commonly hypoechoic than hyperechoic.",
            correct: true,
            explanation: "Hepatic metastases are most commonly hypoechoic, though they can have varied appearances."
        },
        {
            id: 64,
            type: "multipleChoice",
            question: "Transjugular intrahepatic portosystemic shunt (TIPS) connects:",
            options: ["Portal vein to hepatic artery", "Portal vein to hepatic vein", "Hepatic artery to hepatic vein", "Portal vein to IVC"],
            correct: 1,
            explanation: "TIPS creates a connection between the portal vein and hepatic vein to reduce portal pressure."
        },
        {
            id: 65,
            type: "multipleChoice",
            question: "Hepatic hydatid cysts most commonly result from infection with:",
            options: ["Echinococcus granulosus", "Entamoeba histolytica", "Candida albicans", "Staphylococcus aureus"],
            correct: 0,
            explanation: "Echinococcus granulosus is the most common cause of hepatic hydatid disease."
        },
        {
            id: 66,
            type: "trueFalse",
            question: "Hepatic iron deposition can be quantified using ultrasound.",
            correct: false,
            explanation: "MRI is the preferred method for quantifying hepatic iron deposition; ultrasound shows only increased echogenicity."
        },
        {
            id: 67,
            type: "multipleChoice",
            question: "The 'starry sky' appearance on ultrasound suggests:",
            options: ["Normal liver", "Acute hepatitis", "Cirrhosis", "Fatty infiltration"],
            correct: 1,
            explanation: "The 'starry sky' appearance with prominent portal triads suggests acute hepatitis."
        },
        {
            id: 68,
            type: "multipleChoice",
            question: "Hepatic peliosis is characterized by:",
            options: ["Solid tumor masses", "Blood-filled cystic spaces", "Calcified deposits", "Gas collections"],
            correct: 1,
            explanation: "Hepatic peliosis consists of blood-filled cystic spaces within the liver parenchyma."
        },
        {
            id: 69,
            type: "trueFalse",
            question: "Post-transplant lymphoproliferative disorder commonly affects the liver.",
            correct: true,
            explanation: "PTLD can affect the liver, particularly in immunosuppressed transplant recipients."
        },
        {
            id: 70,
            type: "multipleChoice",
            question: "The most appropriate follow-up interval for a 2 cm hepatic hemangioma is:",
            options: ["1 month", "3 months", "6 months", "No follow-up needed"],
            correct: 3,
            explanation: "Typical hepatic hemangiomas <3 cm with characteristic appearance require no routine follow-up."
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
        },
        {
            id: 33,
            type: "multipleChoice",
            question: "The most common type of gallstone is:",
            options: ["Cholesterol stone", "Pigment stone", "Mixed stone", "Calcium stone"],
            correct: 0,
            explanation: "Cholesterol stones comprise approximately 80% of gallstones in Western populations."
        },
        {
            id: 34,
            type: "trueFalse",
            question: "Murphy's sign is specific for acute cholecystitis.",
            correct: false,
            explanation: "Murphy's sign is sensitive but not specific for acute cholecystitis and can occur in other conditions."
        },
        {
            id: 35,
            type: "multipleChoice",
            question: "Gangrenous cholecystitis is suggested by:",
            options: ["Thin gallbladder wall", "Intramural gas", "Multiple polyps", "Contracted gallbladder"],
            correct: 1,
            explanation: "Intramural gas (pneumatosis) suggests gangrenous changes in the gallbladder wall."
        },
        {
            id: 36,
            type: "multipleChoice",
            question: "The normal common bile duct diameter in patients >60 years should not exceed:",
            options: ["4 mm", "6 mm", "8 mm", "10 mm"],
            correct: 3,
            explanation: "In elderly patients (>60 years), the common bile duct can normally measure up to 10 mm."
        },
        {
            id: 37,
            type: "trueFalse",
            question: "Adenomyomatosis of the gallbladder is a premalignant condition.",
            correct: false,
            explanation: "Adenomyomatosis is a benign condition with no malignant potential."
        },
        {
            id: 38,
            type: "multipleChoice",
            question: "Mirizzi syndrome involves:",
            options: ["GB perforation", "Cystic artery aneurysm", "Bile duct obstruction by stones", "GB torsion"],
            correct: 2,
            explanation: "Mirizzi syndrome is bile duct obstruction caused by impacted stones in the cystic artery or Hartmann's pouch."
        },
        {
            id: 39,
            type: "multipleChoice",
            question: "The 'comet tail' artifact is most associated with:",
            options: ["Gallstones", "Polyps", "Sludge", "Wall thickening"],
            correct: 0,
            explanation: "The comet tail artifact is characteristic of cholesterol crystals and small gallstones."
        },
        {
            id: 40,
            type: "trueFalse",
            question: "Gallbladder carcinoma most commonly arises from the fundus.",
            correct: true,
            explanation: "Gallbladder carcinoma most frequently originates in the fundus, followed by the body."
        },
        {
            id: 41,
            type: "multipleChoice",
            question: "Emphysematous cholecystitis is most commonly seen in:",
            options: ["Young women", "Diabetic patients", "Pregnant patients", "Pediatric patients"],
            correct: 1,
            explanation: "Emphysematous cholecystitis occurs predominantly in diabetic patients, especially males."
        },
        {
            id: 42,
            type: "multipleChoice",
            question: "The 'WES' triad includes wall thickening, edema, and:",
            options: ["Stones", "Stranding", "Sludge", "Stricture"],
            correct: 1,
            explanation: "The WES triad (Wall thickening, Edema, Stranding) suggests acute cholecystitis."
        },
        {
            id: 43,
            type: "trueFalse",
            question: "Porcelain gallbladder requires surgical removal due to malignancy risk.",
            correct: true,
            explanation: "Porcelain gallbladder has a significant association with gallbladder carcinoma and warrants cholecystectomy."
        },
        {
            id: 44,
            type: "multipleChoice",
            question: "Biliary-enteric anastomotic stricture most commonly occurs at:",
            options: ["Immediately post-op", "1-3 months", "6-12 months", "Years later"],
            correct: 2,
            explanation: "Anastomotic strictures typically develop 6-12 months after biliary-enteric reconstruction."
        },
        {
            id: 45,
            type: "multipleChoice",
            question: "The spiral valves of Heister are located in the:",
            options: ["Common bile duct", "Cystic duct", "Hepatic duct", "Pancreatic duct"],
            correct: 1,
            explanation: "The spiral valves of Heister are mucosal folds within the cystic duct."
        },
        {
            id: 46,
            type: "trueFalse",
            question: "Gallbladder polyps >1 cm require surgical evaluation.",
            correct: true,
            explanation: "Polyps >1 cm have increased malignancy risk and should be considered for surgical removal."
        },
        {
            id: 47,
            type: "multipleChoice",
            question: "Choledochocele is a type of:",
            options: ["Gallbladder polyp", "Choledochal cyst", "Biliary stricture", "Pancreatic cyst"],
            correct: 1,
            explanation: "Choledochocele is a type III choledochal cyst involving the intraduodenal portion of the bile duct."
        },
        {
            id: 48,
            type: "multipleChoice",
            question: "The most sensitive ultrasound finding for acute cholecystitis is:",
            options: ["Gallstones", "Wall thickening", "Sonographic Murphy's sign", "Pericholecystic fluid"],
            correct: 2,
            explanation: "Sonographic Murphy's sign is the most sensitive ultrasound finding for acute cholecystitis."
        },
        {
            id: 49,
            type: "trueFalse",
            question: "Biliary sludge always progresses to gallstone formation.",
            correct: false,
            explanation: "Biliary sludge may resolve, persist, or progress to gallstones; progression is not inevitable."
        },
        {
            id: 50,
            type: "multipleChoice",
            question: "Cholesterolosis of the gallbladder appears as:",
            options: ["Wall calcification", "Multiple echogenic foci", "Thin septations", "Anechoic areas"],
            correct: 1,
            explanation: "Cholesterolosis shows multiple small echogenic foci in the gallbladder wall representing cholesterol deposits."
        },
        {
            id: 51,
            type: "multipleChoice",
            question: "Klatskin tumors are classified using which system?",
            options: ["Bismuth classification", "TNM staging", "Child-Pugh score", "MELD score"],
            correct: 0,
            explanation: "Bismuth classification is used to categorize hilar cholangiocarcinomas (Klatskin tumors)."
        },
        {
            id: 52,
            type: "trueFalse",
            question: "Hemobilia typically causes the Charcot triad of symptoms.",
            correct: false,
            explanation: "Hemobilia typically causes the Quinke triad (jaundice, pain, GI bleeding), not Charcot's triad."
        },
        {
            id: 53,
            type: "multipleChoice",
            question: "Primary sclerosing cholangitis most commonly affects:",
            options: ["Young women", "Middle-aged men", "Elderly patients", "Children"],
            correct: 1,
            explanation: "PSC predominantly affects middle-aged men and is associated with inflammatory bowel disease."
        },
        {
            id: 54,
            type: "multipleChoice",
            question: "The Rokitansky-Aschoff sinuses are characteristic of:",
            options: ["Acute cholecystitis", "Adenomyomatosis", "Gallbladder carcinoma", "Cholesterolosis"],
            correct: 1,
            explanation: "Rokitansky-Aschoff sinuses are outpouchings of gallbladder mucosa characteristic of adenomyomatosis."
        },
        {
            id: 55,
            type: "trueFalse",
            question: "Gallbladder perforation most commonly occurs at the fundus.",
            correct: true,
            explanation: "Gallbladder perforation typically occurs at the fundus, the most dependent and poorly vascularized portion."
        },
        {
            id: 56,
            type: "multipleChoice",
            question: "Caroli syndrome includes intrahepatic bile duct dilatation and:",
            options: ["Portal hypertension", "Congenital hepatic fibrosis", "Hepatic cysts", "Hepatomegaly"],
            correct: 1,
            explanation: "Caroli syndrome combines Caroli disease (bile duct ectasia) with congenital hepatic fibrosis."
        },
        {
            id: 57,
            type: "multipleChoice",
            question: "The most common cause of acute acalculous cholecystitis is:",
            options: ["Diabetes", "Critical illness", "Pregnancy", "Medications"],
            correct: 1,
            explanation: "Critical illness is the most common setting for acute acalculous cholecystitis."
        },
        {
            id: 58,
            type: "trueFalse",
            question: "Biliary cystadenoma has malignant potential.",
            correct: true,
            explanation: "Biliary cystadenomas can undergo malignant transformation to cystadenocarcinoma."
        },
        {
            id: 59,
            type: "multipleChoice",
            question: "The 'champagne glass' sign refers to:",
            options: ["Dilated intrahepatic ducts", "Choledochal cyst", "Gallbladder shape", "Portal vein appearance"],
            correct: 0,
            explanation: "The 'champagne glass' sign describes the appearance of dilated intrahepatic bile ducts."
        },
        {
            id: 60,
            type: "multipleChoice",
            question: "Postcholecystectomy syndrome most commonly results from:",
            options: ["Retained stones", "Biliary stricture", "Sphincter of Oddi dysfunction", "Bile leak"],
            correct: 2,
            explanation: "Sphincter of Oddi dysfunction is the most common cause of postcholecystectomy syndrome."
        },
        {
            id: 61,
            type: "trueFalse",
            question: "Gallstone ileus typically involves stones >2.5 cm in diameter.",
            correct: true,
            explanation: "Gallstone ileus typically requires large stones (>2.5 cm) to cause mechanical bowel obstruction."
        },
        {
            id: 62,
            type: "multipleChoice",
            question: "The normal gallbladder ejection fraction after CCK stimulation should be:",
            options: [">25%", ">35%", ">50%", ">75%"],
            correct: 1,
            explanation: "Normal gallbladder ejection fraction should be >35% after CCK stimulation."
        },
        {
            id: 63,
            type: "multipleChoice",
            question: "Oriental cholangiohepatitis is most commonly associated with:",
            options: ["Clonorchis sinensis", "Ascaris lumbricoides", "E. coli", "Pseudomonas"],
            correct: 0,
            explanation: "Oriental cholangiohepatitis is strongly associated with Clonorchis sinensis (liver fluke) infection."
        },
        {
            id: 64,
            type: "trueFalse",
            question: "Biliary hamartomas (von Meyenburg complexes) are premalignant.",
            correct: false,
            explanation: "Biliary hamartomas are benign malformations with no malignant potential."
        },
        {
            id: 65,
            type: "multipleChoice",
            question: "The triangle of Calot is bounded by:",
            options: ["Hepatic artery, cystic artery, liver edge", "Cystic artery, cystic duct, common hepatic duct", "Common hepatic duct, cystic duct, liver edge", "Portal vein, hepatic artery, bile duct"],
            correct: 2,
            explanation: "The triangle of Calot is bounded by the common hepatic duct, cystic duct, and liver edge."
        },
        {
            id: 66,
            type: "multipleChoice",
            question: "Bouveret syndrome involves:",
            options: ["Gallstone in duodenum", "Gallstone in colon", "Gallstone in stomach", "Gallstone in jejunum"],
            correct: 0,
            explanation: "Bouveret syndrome is gallstone impaction in the duodenal bulb causing gastric outlet obstruction."
        },
        {
            id: 67,
            type: "trueFalse",
            question: "Gallbladder wall thickening is always pathological.",
            correct: false,
            explanation: "Gallbladder wall thickening can be physiologic (fasting state) or pathologic (inflammation, hypoalbuminemia)."
        },
        {
            id: 68,
            type: "multipleChoice",
            question: "The most common complication of ERCP is:",
            options: ["Bleeding", "Perforation", "Pancreatitis", "Infection"],
            correct: 2,
            explanation: "Post-ERCP pancreatitis is the most common complication, occurring in 3-9% of procedures."
        },
        {
            id: 69,
            type: "multipleChoice",
            question: "Biliary-vascular fistula most commonly involves the:",
            options: ["Portal vein", "Hepatic artery", "Hepatic vein", "IVC"],
            correct: 0,
            explanation: "Biliary-vascular fistulas most commonly involve the portal vein system."
        },
        {
            id: 70,
            type: "trueFalse",
            question: "Choledocholithiasis can be excluded if the bile duct is not dilated.",
            correct: false,
            explanation: "Bile duct dilatation is not always present with choledocholithiasis, especially in acute cases."
        },
        {
            id: 71,
            type: "multipleChoice",
            question: "Gallbladder agenesis is most commonly associated with:",
            options: ["Biliary atresia", "Polysplenia syndrome", "Situs inversus", "ARPKD"],
            correct: 1,
            explanation: "Gallbladder agenesis is most commonly associated with polysplenia syndrome and heterotaxy."
        },
        {
            id: 72,
            type: "multipleChoice",
            question: "The 'rim sign' in gallbladder imaging suggests:",
            options: ["Acute cholecystitis", "Gangrenous cholecystitis", "Chronic cholecystitis", "Gallbladder cancer"],
            correct: 1,
            explanation: "The rim sign indicates perfusion defect suggesting gangrenous cholecystitis."
        },
        {
            id: 73,
            type: "trueFalse",
            question: "Biliary sphincterotomy eliminates the risk of future choledocholithiasis.",
            correct: false,
            explanation: "Sphincterotomy reduces but does not eliminate the risk of recurrent bile duct stones."
        },
        {
            id: 74,
            type: "multipleChoice",
            question: "Choledochal cyst Type IV involves:",
            options: ["Single extrahepatic cyst", "Multiple intra- and extrahepatic cysts", "Choledochocele", "Fusiform CBD dilatation"],
            correct: 1,
            explanation: "Type IV choledochal cysts involve multiple cystic dilatations both intra- and extrahepatically."
        },
        {
            id: 75,
            type: "multipleChoice",
            question: "The most reliable sign of bile duct invasion by gallbladder cancer is:",
            options: ["Bile duct dilatation", "Mass effect on bile duct", "Loss of tissue planes", "Elevated bilirubin"],
            correct: 2,
            explanation: "Loss of normal tissue planes between gallbladder and bile duct suggests invasion."
        },
        {
            id: 76,
            type: "trueFalse",
            question: "Cholangitis requires the complete Charcot triad for diagnosis.",
            correct: false,
            explanation: "Cholangitis can be diagnosed without the complete Charcot triad; fever and elevated liver enzymes may be sufficient."
        },
        {
            id: 77,
            type: "multipleChoice",
            question: "Biliary papillomatosis has the highest malignant potential in which location?",
            options: ["Intrahepatic ducts", "Common hepatic duct", "Common bile duct", "Papilla of Vater"],
            correct: 0,
            explanation: "Intrahepatic biliary papillomatosis has the highest risk of malignant transformation."
        },
        {
            id: 78,
            type: "multipleChoice",
            question: "The 'parallel channel' sign indicates:",
            options: ["Dilated bile duct", "Dilated pancreatic duct", "Both ducts dilated", "Vascular compression"],
            correct: 2,
            explanation: "The parallel channel sign indicates simultaneous dilatation of both bile and pancreatic ducts."
        },
        {
            id: 79,
            type: "trueFalse",
            question: "Gallbladder duplication always requires surgical intervention.",
            correct: false,
            explanation: "Gallbladder duplication is often asymptomatic and may not require intervention if uncomplicated."
        },
        {
            id: 80,
            type: "multipleChoice",
            question: "Chronic cholecystitis most commonly results from:",
            options: ["Repeated acute episodes", "Chronic gallstone irritation", "Ischemia", "Autoimmune disease"],
            correct: 1,
            explanation: "Chronic cholecystitis typically results from chronic irritation by gallstones over time."
        },
        {
            id: 81,
            type: "multipleChoice",
            question: "The most common location for ectopic gallbladder is:",
            options: ["Intrahepatic", "Left-sided", "Retroperitoneal", "Suprahepatic"],
            correct: 0,
            explanation: "Intrahepatic location is the most common form of ectopic gallbladder positioning."
        },
        {
            id: 82,
            type: "trueFalse",
            question: "Biliary cystadenoma shows communication with the biliary tree.",
            correct: false,
            explanation: "Biliary cystadenomas typically do not communicate with the biliary system, unlike choledochal cysts."
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
        },
        {
            id: 42,
            type: "multipleChoice",
            question: "Normal renal parenchymal thickness should be at least:",
            options: ["1.0 cm", "1.5 cm", "2.0 cm", "2.5 cm"],
            correct: 1,
            explanation: "Normal renal parenchymal thickness should be at least 1.5 cm; less suggests chronic disease."
        },
        {
            id: 43,
            type: "trueFalse",
            question: "Horseshoe kidney is the most common renal fusion anomaly.",
            correct: true,
            explanation: "Horseshoe kidney occurs in 1:400-800 births and is the most common fusion anomaly."
        },
        {
            id: 44,
            type: "multipleChoice",
            question: "Autosomal dominant polycystic kidney disease typically manifests clinically in:",
            options: ["Childhood", "Adolescence", "Young adulthood", "Middle age"],
            correct: 3,
            explanation: "ADPKD typically becomes clinically apparent in the 3rd-4th decades of life."
        },
        {
            id: 45,
            type: "multipleChoice",
            question: "The resistive index in a normal kidney should be:",
            options: ["<0.5", "<0.7", "<0.9", ">0.9"],
            correct: 1,
            explanation: "Normal renal resistive index should be <0.7; elevated values suggest renal dysfunction."
        },
        {
            id: 46,
            type: "trueFalse",
            question: "Nephrocalcinosis affects the renal medulla more than cortex.",
            correct: true,
            explanation: "Medullary nephrocalcinosis is more common and typically involves calcium phosphate deposits."
        },
        {
            id: 47,
            type: "multipleChoice",
            question: "Von Hippel-Lindau syndrome is most associated with:",
            options: ["Renal cell carcinoma", "Transitional cell carcinoma", "Wilms tumor", "Oncocytoma"],
            correct: 0,
            explanation: "VHL syndrome has a strong association with clear cell renal cell carcinoma."
        },
        {
            id: 48,
            type: "multipleChoice",
            question: "Acute tubular necrosis typically shows:",
            options: ["Increased cortical echogenicity", "Decreased cortical echogenicity", "Loss of corticomedullary differentiation", "Hydronephrosis"],
            correct: 2,
            explanation: "ATN characteristically causes loss of normal corticomedullary differentiation."
        },
        {
            id: 49,
            type: "trueFalse",
            question: "Renal carbuncle represents a localized bacterial infection.",
            correct: true,
            explanation: "Renal carbuncle is a localized suppurative infection, typically staphylococcal."
        },
        {
            id: 50,
            type: "multipleChoice",
            question: "Medullary sponge kidney affects which part of the nephron?",
            options: ["Glomerulus", "Proximal tubule", "Collecting ducts", "Loop of Henle"],
            correct: 2,
            explanation: "Medullary sponge kidney involves cystic dilatation of collecting ducts in the medulla."
        },
        {
            id: 51,
            type: "multipleChoice",
            question: "The most common location for renal cell carcinoma is:",
            options: ["Upper pole", "Mid kidney", "Lower pole", "Equal distribution"],
            correct: 0,
            explanation: "RCC most commonly occurs in the upper pole of the kidney."
        },
        {
            id: 52,
            type: "trueFalse",
            question: "Chronic kidney disease always causes bilateral small kidneys.",
            correct: false,
            explanation: "Some causes of CKD (diabetes, amyloidosis) may initially cause enlarged kidneys."
        },
        {
            id: 53,
            type: "multipleChoice",
            question: "Xanthogranulomatous pyelonephritis typically affects:",
            options: ["Young children", "Middle-aged women", "Elderly men", "Pregnant women"],
            correct: 1,
            explanation: "XGP typically affects middle-aged women and is often associated with staghorn calculi."
        },
        {
            id: 54,
            type: "multipleChoice",
            question: "Normal ureterovesical jet frequency should be:",
            options: ["Every 30 seconds", "Every 1-2 minutes", "Every 5-15 seconds", "Continuous"],
            correct: 2,
            explanation: "Normal ureterovesical jets occur every 5-15 seconds, indicating ureteral patency."
        },
        {
            id: 55,
            type: "trueFalse",
            question: "Multicystic dysplastic kidney requires immediate surgical intervention.",
            correct: false,
            explanation: "MCDK is often managed conservatively with monitoring as many involute spontaneously."
        },
        {
            id: 56,
            type: "multipleChoice",
            question: "The most common cause of acute renal failure in hospitalized patients is:",
            options: ["Prerenal azotemia", "Acute tubular necrosis", "Postrenal obstruction", "Acute glomerulonephritis"],
            correct: 1,
            explanation: "ATN is the most common cause of acute renal failure in hospitalized patients."
        },
        {
            id: 57,
            type: "multipleChoice",
            question: "Renal oncocytoma typically appears as:",
            options: ["Hyperechoic mass", "Hypoechoic mass", "Cystic mass", "Calcified mass"],
            correct: 1,
            explanation: "Renal oncocytomas are typically homogeneous, hypoechoic masses that may have a central scar."
        },
        {
            id: 58,
            type: "trueFalse",
            question: "Nutcracker syndrome involves compression of the left renal vein.",
            correct: true,
            explanation: "Nutcracker syndrome involves compression of the left renal vein between the aorta and SMA."
        },
        {
            id: 59,
            type: "multipleChoice",
            question: "Page kidney results from:",
            options: ["Renal artery stenosis", "Subcapsular hematoma", "Renal vein thrombosis", "Ureteral obstruction"],
            correct: 1,
            explanation: "Page kidney is hypertension caused by subcapsular hematoma compressing renal parenchyma."
        },
        {
            id: 60,
            type: "multipleChoice",
            question: "The normal bladder wall thickness should not exceed:",
            options: ["2 mm", "3 mm", "5 mm", "8 mm"],
            correct: 2,
            explanation: "Normal bladder wall thickness should not exceed 5 mm when adequately distended."
        },
        {
            id: 61,
            type: "trueFalse",
            question: "Renal lymphoma is usually bilateral.",
            correct: true,
            explanation: "Primary renal lymphoma is rare; secondary involvement is usually bilateral and multifocal."
        },
        {
            id: 62,
            type: "multipleChoice",
            question: "Fetal lobulation is distinguished from scarring by:",
            options: ["Location over calyces", "Location between calyces", "Depth of indentation", "Associated hydronephrosis"],
            correct: 1,
            explanation: "Fetal lobulation occurs between calyces, while pathologic scarring occurs over calyces."
        },
        {
            id: 63,
            type: "multipleChoice",
            question: "Acute pyelonephritis most commonly shows:",
            options: ["Focal hyperechoic areas", "Focal hypoechoic areas", "Hydronephrosis", "Renal enlargement"],
            correct: 1,
            explanation: "Acute pyelonephritis typically shows focal hypoechoic areas representing edema and inflammation."
        },
        {
            id: 64,
            type: "trueFalse",
            question: "Duplicated collecting systems are more common in females.",
            correct: true,
            explanation: "Duplicated collecting systems occur more frequently in females with a 6:1 ratio."
        },
        {
            id: 65,
            type: "multipleChoice",
            question: "The most common cause of unilateral renal agenesis is:",
            options: ["Genetic mutation", "In utero vascular accident", "Maternal infection", "Drug exposure"],
            correct: 1,
            explanation: "Unilateral renal agenesis is usually caused by failure of ureteric bud development."
        },
        {
            id: 66,
            type: "multipleChoice",
            question: "Renal transplant rejection typically shows:",
            options: ["Increased echogenicity", "Decreased echogenicity", "Loss of corticomedullary differentiation", "Hydronephrosis"],
            correct: 2,
            explanation: "Acute rejection typically shows loss of corticomedullary differentiation and increased resistive indices."
        },
        {
            id: 67,
            type: "trueFalse",
            question: "Nephroptosis is more common in thin females.",
            correct: true,
            explanation: "Nephroptosis (floating kidney) is more common in thin females due to decreased retroperitoneal fat."
        },
        {
            id: 68,
            type: "multipleChoice",
            question: "The 'rim sign' in renal imaging indicates:",
            options: ["Renal infarction", "Renal cell carcinoma", "Simple cyst", "Renal stone"],
            correct: 0,
            explanation: "The rim sign represents residual cortical perfusion in acute renal infarction."
        },
        {
            id: 69,
            type: "multipleChoice",
            question: "Autosomal recessive polycystic kidney disease typically presents:",
            options: ["In utero or neonatal period", "In childhood", "In young adulthood", "In middle age"],
            correct: 0,
            explanation: "ARPKD typically presents in the neonatal period with enlarged echogenic kidneys."
        },
        {
            id: 70,
            type: "trueFalse",
            question: "Simple renal cysts require follow-up imaging.",
            correct: false,
            explanation: "Simple renal cysts meeting Bosniak I criteria require no follow-up."
        },
        {
            id: 71,
            type: "multipleChoice",
            question: "The most common malignant renal tumor in adults is:",
            options: ["Transitional cell carcinoma", "Renal cell carcinoma", "Squamous cell carcinoma", "Sarcoma"],
            correct: 1,
            explanation: "Renal cell carcinoma accounts for approximately 85% of malignant renal tumors in adults."
        },
        {
            id: 72,
            type: "multipleChoice",
            question: "Chronic pyelonephritis characteristically shows:",
            options: ["Smooth contour", "Blunted calyces and cortical scarring", "Enlarged kidney", "Increased echogenicity"],
            correct: 1,
            explanation: "Chronic pyelonephritis shows blunted calyces with overlying cortical scarring."
        },
        {
            id: 73,
            type: "trueFalse",
            question: "Milk of calcium in renal cysts is always benign.",
            correct: true,
            explanation: "Milk of calcium represents calcium carbonate precipitation and is always benign."
        },
        {
            id: 74,
            type: "multipleChoice",
            question: "Renal artery stenosis most commonly occurs at:",
            options: ["Renal artery origin", "Mid renal artery", "Hilar branches", "Interlobar arteries"],
            correct: 0,
            explanation: "Atherosclerotic renal artery stenosis most commonly occurs at the artery origin."
        },
        {
            id: 75,
            type: "multipleChoice",
            question: "The dromedary hump represents:",
            options: ["Pathologic scarring", "Normal variant", "Renal tumor", "Infection sequela"],
            correct: 1,
            explanation: "The dromedary hump is a normal variant representing splenic impression on left kidney."
        },
        {
            id: 76,
            type: "trueFalse",
            question: "Renal vein thrombosis typically causes acute flank pain.",
            correct: true,
            explanation: "Acute renal vein thrombosis typically presents with severe flank pain, hematuria, and renal dysfunction."
        },
        {
            id: 77,
            type: "multipleChoice",
            question: "Papillary necrosis is most commonly associated with:",
            options: ["Hypertension", "Diabetes mellitus", "Glomerulonephritis", "Congenital anomalies"],
            correct: 1,
            explanation: "Papillary necrosis is most commonly associated with diabetes mellitus and analgesic abuse."
        },
        {
            id: 78,
            type: "multipleChoice",
            question: "The most sensitive ultrasound finding for hydronephrosis is:",
            options: ["Renal enlargement", "Pelvic dilatation", "Calyceal dilatation", "Cortical thinning"],
            correct: 2,
            explanation: "Calyceal dilatation is the most sensitive finding for early hydronephrosis."
        },
        {
            id: 79,
            type: "trueFalse",
            question: "Crossed fused ectopia always involves the left kidney crossing to the right.",
            correct: false,
            explanation: "Crossed fused ectopia can involve either kidney crossing to the contralateral side."
        },
        {
            id: 80,
            type: "multipleChoice",
            question: "Renal candidiasis typically appears as:",
            options: ["Hyperechoic foci", "Hypoechoic masses", "Cystic lesions", "Calcifications"],
            correct: 0,
            explanation: "Renal candidiasis typically appears as multiple small hyperechoic foci ('fungus balls')."
        },
        {
            id: 81,
            type: "multipleChoice",
            question: "The most common cause of end-stage renal disease is:",
            options: ["Glomerulonephritis", "Diabetes mellitus", "Hypertension", "Polycystic kidney disease"],
            correct: 1,
            explanation: "Diabetes mellitus is the leading cause of end-stage renal disease in developed countries."
        },
        {
            id: 82,
            type: "trueFalse",
            question: "Renal pyramids normally appear hypoechoic compared to cortex.",
            correct: true,
            explanation: "Normal renal pyramids are hypoechoic relative to the cortex, creating corticomedullary differentiation."
        },
        {
            id: 83,
            type: "multipleChoice",
            question: "Acquired cystic kidney disease is most associated with:",
            options: ["Diabetes", "Hypertension", "Dialysis", "Aging"],
            correct: 2,
            explanation: "ACKD is strongly associated with chronic dialysis and increases renal cell carcinoma risk."
        },
        {
            id: 84,
            type: "multipleChoice",
            question: "The normal ureteral orifice appears as:",
            options: ["Hyperechoic focus", "Hypoechoic area", "Echogenic jet", "Anechoic structure"],
            correct: 0,
            explanation: "Normal ureteral orifices appear as small hyperechoic foci on the bladder trigone."
        },
        {
            id: 85,
            type: "trueFalse",
            question: "Wilms tumor typically presents in the first decade of life.",
            correct: true,
            explanation: "Wilms tumor (nephroblastoma) typically occurs in children under 5 years old."
        },
        {
            id: 86,
            type: "multipleChoice",
            question: "Renal arteriovenous malformation most commonly results from:",
            options: ["Congenital anomaly", "Penetrating trauma", "Biopsy", "Infection"],
            correct: 2,
            explanation: "Acquired AVMs most commonly result from renal biopsy or other invasive procedures."
        },
        {
            id: 87,
            type: "multipleChoice",
            question: "The 'eggshell sign' in renal imaging refers to:",
            options: ["Thin-walled cyst", "Rim calcification", "Cortical nephrocalcinosis", "Papillary calcification"],
            correct: 1,
            explanation: "The eggshell sign refers to thin rim calcification, often seen in chronic hematomas."
        },
        {
            id: 88,
            type: "trueFalse",
            question: "Renal duplication increases the risk of urinary tract infections.",
            correct: true,
            explanation: "Duplicated collecting systems increase UTI risk due to ureterovesical reflux and stasis."
        },
        {
            id: 89,
            type: "multipleChoice",
            question: "Emphysematous pyelonephritis is most commonly seen in:",
            options: ["Healthy individuals", "Diabetic patients", "Immunocompromised patients", "Elderly patients"],
            correct: 1,
            explanation: "Emphysematous pyelonephritis occurs predominantly in diabetic patients with poor glucose control."
        },
        {
            id: 90,
            type: "multipleChoice",
            question: "The most reliable sign of chronic kidney disease on ultrasound is:",
            options: ["Increased echogenicity", "Small kidney size", "Loss of corticomedullary differentiation", "Cortical thinning"],
            correct: 1,
            explanation: "Bilateral small kidneys (<9 cm) are the most reliable ultrasound sign of chronic kidney disease."
        },
        {
            id: 91,
            type: "trueFalse",
            question: "Column of Bertin can mimic a renal mass.",
            correct: true,
            explanation: "Prominent columns of Bertin (cortical tissue) can simulate renal masses but have normal cortical echogenicity."
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