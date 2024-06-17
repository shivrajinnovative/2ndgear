
import ValuationImg from './../assets/Valuation.png'
import LegalImg from './../assets/Legal.png'
import DismantlingImg from './../assets/Dismantling.png'
import CommissioningImg from './../assets/Commissioning.png'
import RefurbishmentImg from './../assets/Refurbishment.png'
import MaintenanceImg from './../assets/Maintenance.png'
import ManagementImg from './../assets/Management.png'
import InspectionImg from './../assets/Inspection.png'
import TransportImg from './../assets/Transport.png'



const services={
    "inspection":{
        heading:"Inspection",
        para:"The role of engineering inspection is to identify any faults or defects in plant and machinery that have or will in the course of time, present an unacceptable risk. Many inspections are mandatory in order to comply with applicable health and safety legislation.",
        image:InspectionImg
    },
    "valuation":{
        heading:"Valuation",
        para:"Valuation is the process of determining the worth of an asset or company. Valuation is important because it provides prospective buyers with an idea of how much they should pay for an asset or company and for prospective sellers, how much they should sell for.",
        image:ValuationImg
    },
    "legal":{
        heading:"Legal",
        para:[
            "Starting a manufacturing business can be a daunting task, especially in a country like India, where there are several legal and regulatory requirements that need to be met. From registering your business to obtaining licenses and permits, navigating the legal and regulatory landscape can be overwhelming for beginners. In this article, we’ll provide a beginner's guide to navigating legal and regulatory requirements for small manufacturing businesses in India.",
            "Register Your Business",
            "The first step to starting a small manufacturing business in India is to register your business. You can register your business as a sole proprietorship, partnership, or a private limited company, depending on your requirements. It is essential to obtain a unique business name and register it with the Registrar of Companies (RoC). The registration process involves obtaining a Digital Signature Certificate (DSC) and a Director Identification Number (DIN), followed by filing of the Memorandum of Association (MoA) and Articles of Association (AoA) with the RoC.",
            "*Obtain Necessary Licenses and Permits",
            "Once your business is registered, the next step is to obtain the necessary licenses and permits required to operate a manufacturing business in India. The licenses and permits required may vary depending on the nature of your business, the industry you are operating in, and the state in which you are based. Some of ",
            "the common licenses and permits required for small manufacturing businesses include:"
        ],
        image:LegalImg,
        list:[
            "Factory License",
            "Labour License",
            "Pollution Control Board Consent",
            "Shops and Establishment License",
            "Fire NOC",
            "GST Registration"
        ]
    },
    "dismantling":{
        heading:"Dismantling",
        para:"The dismantling of industrial plants involves the use of certified vehicles, as well as complex management of environmental permits due to the disposal of specific materials such as asbestos, waste oils from processing, acids and radioactive material.",
        image:DismantlingImg
    },
    "transport":{
        heading:"Transport",
        para:[
            "Our extensive experience and highly qualified professional staff ensure seamless completion of each stage of the transportation and assembly of parts of or entire industrial plants.",
            "Dismantling",
            "Packaging",
            "Layout study",
            "Geometric control",
            `"Turnkey" transportation`,
            "Assembly",
            "Commissioning",
            `The application of cutting-edge working methods allows us to offer highly competitive cost effectiveness, turnaround times and end quality. We offer customers total peace of mind thanks to its corporate structure based around a solid global group, guaranteeing total supervision and control of the entire "turnkey" process.`
        ],
        image:TransportImg
    },
    "refurbishment":{
        heading:"Refurbishment",
        para:"The Process of Refurbishment involves repair of older or damaged equipment or spares with high cost to restore it to workable condition. In any production plant, refurbishing damaged, high quality and repairable material is a core maintenance process. Refurbishment saves costs over Purchasing new components.",
        image:RefurbishmentImg
    },
    "operation-and-maintenance":{
        heading:"Operation & Maintenance",
        para:"Operations and Maintenance (O&M) is a combination of activities and tasks that ensure a system, facility, or equipment is operating efficiently, safely, and continuously. O&M can include general maintenance, management, training, budgeting, and business processes.",
        image:MaintenanceImg
    },
    "asset-management":{
        heading:"Asset Management",
        para:"A asset manager oversees the care of a company's assets. This could be a dedicated position within a large company, or fall on the shoulders of the owner in a smaller haulage firm. They are responsible for keeping the assets optimized at all times by regularly assessing and maintaining the assets.",
        image:ManagementImg
    },
    "erection-and-commissioning":{
        heading:"Erection & Commissioning",
        para:[
           "Erection and commissioning of industrial plants involves building and installing a plant, as well as performing tests to ensure it meets industry standards:",
           "Erection",
           "Contractors, vendors, and other project operatives install equipment, frames, brackets, and materials within a building structure to create a complete plant. This can include electrical, mechanical, fire, controls, HVAC, and plumbing systems.",
           "Commissioning",
           "This involves performing tests and procedures to show that the plant can deliver heat or perform its intended function. During this process, quality control measures should be implemented to ensure that the equipment is installed correctly and functions as intended. This may include checking for proper alignment, verifying components, conducting tests and inspections, and documenting the results. Any deviations from the approved design should be addressed and resolved promptly."
        ],
        image:CommissioningImg
    },
}

export default services