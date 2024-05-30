import { IoArrowDownCircleOutline } from "react-icons/io5";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Faq = () => {
  return (
    <div className="p-10 lg:p-20">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
        <div className=" flex items-center">
          <div className="">
            <div className="">
              <h1 className="font-bold lg:text-4xl text-2xl ">
                Frequently Asked Questions
              </h1>
            </div>
            {/* <div className="">
              <p>
                Our Frequently Asked Questions (FAQs) section provides quick
                answers to the most common inquiries about our services. our
                FAQs are designed to help you find the answers you need
                efficiently.
              </p>
            </div> */}
          </div>
        </div>
        <div className="">
          <div>
            <Accordion defaultExpanded>
              <div className="bg-slate-800 text-white">
                <AccordionSummary
                  expandIcon={
                    <IoArrowDownCircleOutline className="text-orange-400 text-2xl" />
                  }
                  aria-controls="panel2-content"
                  sx={{ backgroundColor: "" }}
                  className="bg-slate-800 text-white"
                >
                  <Typography>
                    How does WEDYF help with NEET and other exams ?
                  </Typography>
                </AccordionSummary>
              </div>
              <AccordionDetails>
                <Typography>
                  We provide tailored exam training for NEET , USMLE and FMGE to
                  help you confidently tackle these challenges.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <div className="bg-gray-500/30 text-white">
                <AccordionSummary
                  expandIcon={
                    <IoArrowDownCircleOutline className="text-orange-400 text-2xl" />
                  }
                  aria-controls="panel2-content"
                  sx={{ backgroundColor: "" }}
                  className="bg-slate-800 text-white"
                >
                  <Typography>
                    What makes MBBS programs in Tbilisi globally recognized ?
                  </Typography>
                </AccordionSummary>
              </div>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <div className="bg-gray-500/30 text-white">
                <AccordionSummary
                  expandIcon={
                    <IoArrowDownCircleOutline className="text-orange-400 text-2xl" />
                  }
                  aria-controls="panel2-content"
                  sx={{ backgroundColor: "" }}
                  className="bg-slate-800 text-white"
                >
                  <Typography>
                    How affordable are Tbilisi’s MBBS programs compared to other
                    destinations ?
                  </Typography>
                </AccordionSummary>
              </div>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <div className="bg-gray-500/30 text-white">
                <AccordionSummary
                  expandIcon={
                    <IoArrowDownCircleOutline className="text-orange-400 text-2xl" />
                  }
                  aria-controls="panel2-content"
                  sx={{ backgroundColor: "" }}
                  className="bg-slate-800 text-white"
                >
                  <Typography>
                    What makes MBBS programs in Tbilisi globally recognized ?
                  </Typography>
                </AccordionSummary>
              </div>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <div className="bg-gray-500/30 text-white">
                <AccordionSummary
                  expandIcon={
                    <IoArrowDownCircleOutline className="text-orange-400 text-2xl" />
                  }
                  aria-controls="panel2-content"
                  sx={{ backgroundColor: "" }}
                  className="bg-slate-800 text-white"
                >
                  <Typography>
                    How does WEDYF help with NEET and other exams ?
                  </Typography>
                </AccordionSummary>
              </div>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
