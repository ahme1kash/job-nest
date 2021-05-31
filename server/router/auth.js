const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const cookieParser = require("cookie-parser");
// const { default: RecruiterLogin } = require('../../client/src/components/RecruiterLogin')

// const jwt = require('jsonwebtoken')
// const authenticateCandidate = require("../middleware/authenticateCandidate")//fetching or requiring the authenticate from authenticateCandidate.js
// const authenticateRecruiter = require("../middleware2/authenticateRecruiter")//fetching or requiring the authenticate from authenticateCandidate.js

require("../DB/conn");
// const Candidate = require("../model/candidateSchema")//fetching the candidate data from candidateSchema.js
// const Recruiter = require("../model/recruiterSchema")//fetching the candidate data from recruiterSchema.js

router.get("/", (req, res) => {
  res.send("Hello world from servers router");
});

// Consuming promises using async await
// Registering the candidate

router.post("/registercandidate", async (req, res) => {
  const { name, email, contactnumber, work, password, cpassword } = req.body; //destructuring

  if (!name || !email || !contactnumber || !work || !password || !cpassword) {
    return res
      .status(422)
      .json({ error: "Please give input to all the fields" });
  }
  // When the number of inputs are more// However in the frontend this condition can never happen
  //because the input fields are already given and fixed.
  // if (Object.keys(req.body).length > 6) {

  //     return res.status(422).json({ error: "Only give the required inputs to all the fields" })

  // }

  try {
    //await User.find({$or:[{email},{contactnumber}]})await User.findOne({email:email})

    const candidateExist = await Candidate.find({
      $or: [{ email }, { contactnumber }],
    });

    if (candidateExist.length !== 0) {
      //found some existing data in database
      return res
        .status(422)
        .json({
          error:
            "Either contactnumber number or Email is already registered in the Database ",
        });
    } else if (password !== cpassword) {
      return res
        .status(422)
        .json({ error: "Password and Confirm password are not matching" });
    }

    const candidate = new Candidate({
      name,
      email,
      contactnumber,
      work,
      password,
      cpassword,
    });
    // Before saving here the password gets hashed

    await candidate.save();

    res.status(200).json({ message: "successful Registration performed" });
  } catch (err) {
    console.log(err);
  }
});

// Registering the recruiter
router.post("/registerrecruiter", async (req, res) => {
  const { name, email, password } = req.body; //destructuring

  if (!name || !email || !password) {
    return res
      .status(422)
      .json({ error: "Please give input to all the fields" });
  }

  if (Object.keys(req.body).length > 3) {
    return res
      .status(422)
      .json({ error: "Only give the required inputs to all the fields" });
  }

  try {
    //await User.find({$or:[{email},{contactnumber}]})await User.findOne({email:email})

    const recruiterExist = await Recruiter.findOne({ email });
    if (recruiterExist) {
      return res.status(422).json({ error: "Email already present" });
    }

    const recruiter = new Recruiter({ name, email, password });

    await recruiter.save();

    res.status(200).json({ message: "successful Registration performed" });
  } catch (err) {
    console.log(err);
  }
});

//Login Recruiter
const authenticateRecruiter = require("../middleware2/authenticateRecruiter");
const Recruiter = require("../model/recruiterSchema"); //fetching the candidate data from recruiterSchema.js
router.post("/loginrecruiter", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(422)
        .json({ error: "Please give all inputs to all the fields" });
    }
    const recruiterloginExist = await Recruiter.findOne({ email });
    if (recruiterloginExist) {
      const isMatch = await bcrypt.compare(
        password,
        recruiterloginExist.password
      );
      // const token = await recruiterloginExist.generateAuthToken()
      // console.log(token)
      // res.cookie("jw1token",token,{
      //     expires:new Date(Date.now()+ 864000), //10 days in millisecs
      // })
      if (isMatch) {
        const token = await recruiterloginExist.generateAuthToken();
        // console.log(token)
        res.cookie("jwtoken", token, {
          expires: new Date(Date.now() + 864000000), //10 days in millisecs
          httpOnly: true,
        });
        res.status(200).json({ message: "Successful Recruiter login" });
      } else {
        res.status(422).json({ message: "Unsuccessful login" });
      }
    }
  } catch (err) {
    console.log(err);
  }
});

// Login Candidate

const authenticateCandidate = require("../middleware/authenticateCandidate");
const Candidate = require("../model/candidateSchema"); //fetching the candidate data from candidateSchema.js
router.post("/logincandidate", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(422)
        .json({ error: "Please give input to all the fields" });
    }
    const candidateloginExist = await Candidate.findOne({ email });
    // const isMatch = await bcrypt.compare(password, candidateloginExist.password)
    if (candidateloginExist) {
      //    console.log(candidateloginExist)
      const isMatch = await bcrypt.compare(
        password,
        candidateloginExist.password
      );
      // const token = await candidateloginExist.generateAuthToken()

      //  console.log(token)
      // res.cookie("jw2token",token,{
      //     expires:new Date(Date.now()+ 864000), //10 days in millisecs
      //     httpOnly:true
      // })
      if (isMatch) {
        const token = await candidateloginExist.generateAuthToken();
        // console.log(token)
        res.cookie("jw2token", token, {
          expires: new Date(Date.now() + 864000000), //10 days in millisecs
          httpOnly: true,
        });
        res.status(200).json({ message: "Successful Candidate login" });
      } else {
        res.status(422).json({ message: "Unsuccessful login" });
      }
    }
  } catch (err) {
    console.log(err);
  }

})
  const Job = require("../model/jobSchema"); //fetching the candidate data from candidateSchema.js
  router.use(cookieParser());
  router.post("/recruiterjobs", authenticateRecruiter, async(req, res) => {
      try{
        const {postedon,title,jobtype,location,companyname,companyurl,skills,link} = req.body; //destructuring
  if (!postedon ||!title ||!jobtype ||!location ||!companyname ||!companyurl ||!skills ||!link) {
        return res
          .status(422)
          .json({ error: "Please give input to all the fields" })
      }
      const job = new Job({postedon,title,jobtype,location,companyname,companyurl,skills,link})
      await job.save();
      res.status(200).json({ message: "Job registered Successfully" })
  }
  catch(err){
     console.log(err)
  }
    })
  


    const CandidateProfile = require("../model/candidateProfileSchema"); //fetching the candidate data from candidateSchema.js
    router.post("/candidateprofile", async (req, res) => {
        try{
          
          const {CurrentLocation,LinkedInProfile,Profession,YearofExperience,ProvideyourBio} = req.body; //destructuring
          if ( !CurrentLocation ||!LinkedInProfile ||!Profession ||!YearofExperience ||!ProvideyourBio) {
          return res
            .status(422)
            .json({ error: "Please give input to all the fields" })
        }
        const candidateprofile = new CandidateProfile({CurrentLocation,LinkedInProfile,Profession,YearofExperience,ProvideyourBio})
        await candidateprofile.save();
        res.status(200).json({ message: "Job Profile registered Successfully" })
    }
    catch(err){
       console.log(err)
    }
      })
    



      
  // Go To '/jobs'
  router.use(cookieParser());
  router.get("/candidatejobs", authenticateCandidate, (req, res) => {
    // console.log('I am executed after hello my  middleware')
    res.send(req.rootCandidate);
  })
  router.use(cookieParser());
  router.get("/recruiterjobs", authenticateRecruiter, (req, res) => {
    // console.log('I am executed after hello my  middleware')
    res.send(req.rootRecruiter);
  })

  // const candidateProfile = require("../model/candidateProfileSchema");
  // router.use(cookieParser());
  // router.get("/candidateprofile", authenticateCandidate, (req, res) => {
  //   const candidateprofileExist = await candidateProfile.findOne({ });
  //   res.send(req.rootCandidateID);
  // })

  // router.use(cookieParser());
  // router.get("/logincandidate", authenticateCandidate, (req, res) => {
  //   res.send(req.rootCandidateID);
  // })


module.exports = router;
