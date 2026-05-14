let db = require('./dbconnection');

exports.addSchool = async (req, res) => {
    try {

        console.log('Received request to add school:', req.body);
        let name = req.body.name;
        let address = req.body.address;
        let latitude = req.body.latitude;
        let longitude = req.body.longitude;

        const [result] = await db.query(
            'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)',
            [
                name,
                address,
                latitude,
                longitude,
            ]
        );

        console.log('School added with ID:', result.insertId);

        res.status(201).json({
            message: 'School added successfully',
            schoolId: result.insertId,
        });

    } catch (err) {

        console.error('Error inserting school:', err);

        res.status(500).json({
            error: 'Failed to add school'
        });
    }
};

exports.listSchools = async (req, res) => {

    try {
        const [rows] = await db.query('SELECT * FROM schools');
        console.log('Fetched schools:', rows);
        res.json(rows);
    } catch (err) {
        console.error('Error fetching schools:', err);
        res.status(500).json({
            error: 'Failed to fetch schools'
        });
    }
};