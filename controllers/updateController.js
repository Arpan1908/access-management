const {
    Content,
    Workshop,
    Award,
    Competition,
    Conference,
    Consultancy,
    FDP,
    Hackathon,
    IndustrialTour
  } = require('../models/Content'); // Assuming all models are exported from one file
  
  // Update Content
  exports.updateContent = async (req, res) => {
    const { documentId } = req.params;
    const updateData = req.body;
    const user = req.user;
  
    try {
      if (!hasPermission(user, documentId, 'edit')) {
        return res.status(403).json({ msg: 'Access denied. You do not have permission to edit this content.' });
      }
  
      const content = await Content.findByIdAndUpdate(documentId, updateData, { new: true });
      if (!content) {
        return res.status(404).json({ msg: 'Content not found' });
      }
      res.json({ msg: 'Content updated successfully', content });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  };
  
 
  const hasPermission = (user, documentId, permissionType) => {
    return user.contentAccess.some(
      (access) =>
        access.contentId.toString() === documentId && access.permissions === permissionType
    );
  };

  exports.updateWorkshop = async (req, res) => {
    const { documentId } = req.params;
    const updateData = req.body;
    const user = req.user;
  
    try {
      if (!hasPermission(user, documentId, 'edit')) {
        return res.status(403).json({ msg: 'Access denied. You do not have permission to edit this workshop.' });
      }
  
      const workshop = await Workshop.findByIdAndUpdate(documentId, updateData, { new: true });
      if (!workshop) {
        return res.status(404).json({ msg: 'Workshop not found' });
      }
      res.json({ msg: 'Workshop updated successfully', workshop });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  };
  
  // Update Award
  exports.updateAward = async (req, res) => {
    const { documentId } = req.params;
    const updateData = req.body;
    const user = req.user;
  
    try {
      if (!hasPermission(user, documentId, 'edit')) {
        return res.status(403).json({ msg: 'Access denied. You do not have permission to edit this award.' });
      }
  
      const award = await Award.findByIdAndUpdate(documentId, updateData, { new: true });
      if (!award) {
        return res.status(404).json({ msg: 'Award not found' });
      }
      res.json({ msg: 'Award updated successfully', award });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  };
  
  // Update Competition
  exports.updateCompetition = async (req, res) => {
    const { documentId } = req.params;
    const updateData = req.body;
    const user = req.user;
  
    try {
      if (!hasPermission(user, documentId, 'edit')) {
        return res.status(403).json({ msg: 'Access denied. You do not have permission to edit this competition.' });
      }
  
      const competition = await Competition.findByIdAndUpdate(documentId, updateData, { new: true });
      if (!competition) {
        return res.status(404).json({ msg: 'Competition not found' });
      }
      res.json({ msg: 'Competition updated successfully', competition });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  };
  
  // Update Conference
  exports.updateConference = async (req, res) => {
    const { documentId } = req.params;
    const updateData = req.body;
    const user = req.user;
  
    try {
      if (!hasPermission(user, documentId, 'edit')) {
        return res.status(403).json({ msg: 'Access denied. You do not have permission to edit this award.' });
      }
    
  
    
      const conference = await Conference.findByIdAndUpdate(documentId, updateData, { new: true });
      if (!conference) {
        return res.status(404).json({ msg: 'Conference not found' });
      }
      res.json({ msg: 'Conference updated successfully', conference });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  };
  
  // Update Consultancy
  exports.updateConsultancy = async (req, res) => {
    const { documentId } = req.params;
    const updateData = req.body;
    const user = req.user;
  
    try {
      if (!hasPermission(user, documentId, 'edit')) {
        return res.status(403).json({ msg: 'Access denied. You do not have permission to edit this award.' });
      }
  
   
      const consultancy = await Consultancy.findByIdAndUpdate(documentId, updateData, { new: true });
      if (!consultancy) {
        return res.status(404).json({ msg: 'Consultancy not found' });
      }
      res.json({ msg: 'Consultancy updated successfully', consultancy });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  };
  
  // Update FDP
  exports.updateFDP = async (req, res) => {
    const { documentId } = req.params;
    const updateData = req.body;
    const user = req.user;
  
    try {
      if (!hasPermission(user, documentId, 'edit')) {
        return res.status(403).json({ msg: 'Access denied. You do not have permission to edit this award.' });
      }
  
   
      const fdp = await FDP.findByIdAndUpdate(documentId, updateData, { new: true });
      if (!fdp) {
        return res.status(404).json({ msg: 'FDP not found' });
      }
      res.json({ msg: 'FDP updated successfully', fdp });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  };
  
  // Update Hackathon
  exports.updateHackathon = async (req, res) => {
    const { documentId } = req.params;
    const updateData = req.body;
    const user = req.user;
  
    try {
      if (!hasPermission(user, documentId, 'edit')) {
        return res.status(403).json({ msg: 'Access denied. You do not have permission to edit this award.' });
      }
    
      const hackathon = await Hackathon.findByIdAndUpdate(documentId, updateData, { new: true });
      if (!hackathon) {
        return res.status(404).json({ msg: 'Hackathon not found' });
      }
      res.json({ msg: 'Hackathon updated successfully', hackathon });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  };
  
  // Update Industrial Tour
  exports.updateIndustrialTour = async (req, res) => {
    const { documentId } = req.params;
    const updateData = req.body;
    const user = req.user;
  
    try {
      if (!hasPermission(user, documentId, 'edit')) {
        return res.status(403).json({ msg: 'Access denied. You do not have permission to edit this award.' });
      }
      const tour = await IndustrialTour.findByIdAndUpdate(documentId, updateData, { new: true });
      if (!tour) {
        return res.status(404).json({ msg: 'Industrial Tour not found' });
      }
      res.json({ msg: 'Industrial Tour updated successfully', tour });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  };
  





  exports.insertContent = async (req, res) => {
    const newData = req.body;
  
    const { documentId } = req.params;
    const updateData = req.body;
    const user = req.user;
  
    try {
      if (!hasPermission(user, documentId, 'edit')) {
        return res.status(403).json({ msg: 'Access denied. You do not have permission to edit this award.' });
      }
      const content = new Content(newData);
      await content.save();
      res.status(201).json({ msg: 'Content created successfully', content });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  };
  
  // Insert Workshop
  exports.insertWorkshop = async (req, res) => {
    const newData = req.body;
  
    const { documentId } = req.params;
    const updateData = req.body;
    const user = req.user;
  
    try {
      if (!hasPermission(user, documentId, 'edit')) {
        return res.status(403).json({ msg: 'Access denied. You do not have permission to edit this award.' });
      }
      const workshop = new Workshop(newData);
      await workshop.save();
      res.status(201).json({ msg: 'Workshop created successfully', workshop });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  };
  
  // Insert Award
  exports.insertAward = async (req, res) => {
    const newData = req.body;
  
    const { documentId } = req.params;
    const updateData = req.body;
    const user = req.user;
  
    try {
      if (!hasPermission(user, documentId, 'edit')) {
        return res.status(403).json({ msg: 'Access denied. You do not have permission to edit this award.' });
      }
      const award = new Award(newData);
      await award.save();
      res.status(201).json({ msg: 'Award created successfully', award });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  };
  
  // Insert Competition
  exports.insertCompetition = async (req, res) => {
    const newData = req.body;
  
    const { documentId } = req.params;
    const updateData = req.body;
    const user = req.user;
  
    try {
      if (!hasPermission(user, documentId, 'edit')) {
        return res.status(403).json({ msg: 'Access denied. You do not have permission to edit this award.' });
      }
      const competition = new Competition(newData);
      await competition.save();
      res.status(201).json({ msg: 'Competition created successfully', competition });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  };
  
  // Insert Conference
  exports.insertConference = async (req, res) => {
    const newData = req.body;
    const { documentId } = req.params;
    const updateData = req.body;
    const user = req.user;
  
    try {
      if (!hasPermission(user, documentId, 'edit')) {
        return res.status(403).json({ msg: 'Access denied. You do not have permission to edit this award.' });
      }
      const conference = new Conference(newData);
      await conference.save();
      res.status(201).json({ msg: 'Conference created successfully', conference });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  };
  
  // Insert Consultancy
  exports.insertConsultancy = async (req, res) => {
    const newData = req.body;
  
    const { documentId } = req.params;
    const updateData = req.body;
    const user = req.user;
  
    try {
      if (!hasPermission(user, documentId, 'edit')) {
        return res.status(403).json({ msg: 'Access denied. You do not have permission to edit this award.' });
      }
      const consultancy = new Consultancy(newData);
      await consultancy.save();
      res.status(201).json({ msg: 'Consultancy created successfully', consultancy });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  };
  
  // Insert FDP
  exports.insertFDP = async (req, res) => {
    const newData = req.body;
  
    const { documentId } = req.params;
    const updateData = req.body;
    const user = req.user;
  
    try {
      if (!hasPermission(user, documentId, 'edit')) {
        return res.status(403).json({ msg: 'Access denied. You do not have permission to edit this award.' });
      }
      const fdp = new FDP(newData);
      await fdp.save();
      res.status(201).json({ msg: 'FDP created successfully', fdp });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  };
  
  // Insert Hackathon
  exports.insertHackathon = async (req, res) => {
    const newData = req.body;
    const { documentId } = req.params;
    const updateData = req.body;
    const user = req.user;
  
    try {
      if (!hasPermission(user, documentId, 'edit')) {
        return res.status(403).json({ msg: 'Access denied. You do not have permission to edit this award.' });
      }
      const hackathon = new Hackathon(newData);
      await hackathon.save();
      res.status(201).json({ msg: 'Hackathon created successfully', hackathon });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  };
  
  // Insert Industrial Tour
  exports.insertIndustrialTour = async (req, res) => {
    const newData = req.body;
    const { documentId } = req.params;
    const updateData = req.body;
    const user = req.user;
  
    try {
      if (!hasPermission(user, documentId, 'edit')) {
        return res.status(403).json({ msg: 'Access denied. You do not have permission to edit this award.' });
      }
      const tour = new IndustrialTour(newData);
      await tour.save();
      res.status(201).json({ msg: 'Industrial Tour created successfully', tour });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  };