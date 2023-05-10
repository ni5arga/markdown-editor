module.exports = (req, res) => {
    const { markdown } = req.body;
  
    // Save the markdown document here
  
    res.status(200).json({ success: true });
  };
  