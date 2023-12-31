import mathematics from "../images/mathematics.png";
import english from "../images/english.png";
import biology from "../images/biology.png";
import chemistry from "../images/chemistry.png";
import physics from "../images/physics.png";
import IB from "../images/ib.png";

import mathematicsExcellence from "../images/Badges/MathematicsExcellence.png";
import englishExcellence from "../images/Badges/EnglishExcellence.png";
import higherLevelMathematicsExcellence from "../images/Badges/HigherLevelMathematicsExcellence.png";
import biologyExcellence from "../images/Badges/BiologyExcellence.png";
import chemistryExcellence from "../images/Badges/ChemistryExcellence.png";
import physicsExcellence from "../images/Badges/PhysicsExcellence.png";
import IBPreparation from "../images/Badges/IBPreparation.png";

import mathematicsIB7 from "../images/Badges/MathematicsIB7.png";
import englishIB7 from "../images/Badges/EnglishIB7.png";
import higherLevelMathematicsIB7 from "../images/Badges/HigherLevelMathematicsIB7.png";
import biologyIB7 from "../images/Badges/BiologyIB7.png";
import chemistryIB7 from "../images/Badges/ChemistryIB7.png";
import physicsIB7 from "../images/Badges/PhysicsIB7.png";

export const CourseDetails = [
    {
        name: "IB Preparation",
        image: IB,
        description: "",
        curriculum: [
            "IB Application Personal Questionnaire",
            "IB Application English Writing Exercise",
            "IB Application Mathematics Task Preparation",
            "General Application Guidance"
        ],
        certifications: [
            {
                description: "Tutors with this certification have met GradPath certification to help upcoming IB students prepare their IB applications.",
                image: IBPreparation
            },
        ]
    },
    {
        name: "Mathematics",
        image: mathematics,
        description: "",
        curriculum: [
            "General, Rational, Trigonometric and Logarithmic Functions",
            "Derivatives",
            "Implicit Differentiation",
            "Integration",
            "Proofs",
            "Binomial Theorem",
            "Sequences and Series"
        ],
        certifications: [
            {
                description: "Tutors with this certification have met GradPath certification to tutor at the highest level (IB level 7) of the IB higher level mathematics standard.",
                image: higherLevelMathematicsIB7
            },
            {
                description: "Tutors with this certification have met GradPath certification to tutor at the IB higher level mathematics standard.",
                image: higherLevelMathematicsExcellence
            },
            {
                description: "Tutors with this certification have met GradPath certification to tutor at the highest level (IB level 7) of the IB mathematics standard.",
                image: mathematicsIB7
            },
            {
                description: "Tutors with this certification have met GradPath certification to tutor at the IB mathematics standard.",
                image: mathematicsExcellence
            },

        ],
        subcourse: "Higher and Standard Level"
    },
    {
        name: "English",
        image: english,
        description: "",
        curriculum: [
            "IB Paper 1 Close Reading Analysis",
            "IB Paper 2 Global Issues Essay",
            "Individual Oral",
            "HL Essay",
            "Shakespeare"
        ],
        certifications: [
            {
                description: "Tutors with this certification have met GradPath certification to tutor at the highest level (IB level 7) of the IB English standard.",
                image: englishIB7
            },
            {
                description: "Tutors with this certification have met GradPath certification to tutor at the IB English standard.",
                image: englishExcellence
            },
        ],
    },
    {
        name: "Biology",
        image: biology,
        description: "",
        curriculum: ["Curriculum coming soon!"],
        certifications: [
            {
                description: "Tutors with this certification have met GradPath certification to tutor at the highest level (IB level 7) of the IB biology standard.",
                image: biologyIB7
            },
            {
                description: "Tutors with this certification have met GradPath certification to tutor at the IB biology standard.",
                image: biologyExcellence
            },
        ],
    },
    {
        name: "Chemistry",
        image: chemistry,
        description: "",
        curriculum: [
            "Stoichiometric Relationships",
            "Atomic Structure and Periodicity",
            "Chemical Bonding and Structure",
            "Thermochemistry",
            "Electrochemistry",
            "Organic Chemistry",
        ],
        certifications: [
            {
                description: "Tutors with this certification have met GradPath certification to tutor at the highest level (IB level 7) of the IB chemistry standard.",
                image: chemistryIB7
            },
            {
                description: "Tutors with this certification have met GradPath certification to tutor at the IB chemistry standard.",
                image: chemistryExcellence
            },
        ],
    },
    {
        name: "Physics",
        image: physics,
        description: "",
        curriculum: [
            "Measurements and Uncertainties",
            "Mechanics",
            "Thermal Physics",
            "Waves and Wave Phenomena",
            "Electricity",
            "Circular Motion, Gravitation and Fields",
            "Energy Production",
        ],
        certifications: [
            {
                description: "Tutors with this certification have met GradPath certification to tutor at the highest level (IB level 7) of the IB physics standard.",
                image: physicsIB7
            },
            {
                description: "Tutors with this certification have met GradPath certification to tutor at the IB physics standard.",
                image: physicsExcellence
            },
        ],
    }
]
