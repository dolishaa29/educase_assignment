let db = require('./dbconnection');
const calculateDistance = require('./utils/distanceCalculator');

exports.addSchool = async (req, res) => {
    try {

        console.log( req.body);
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

        const userLat = parseFloat(req.query.latitude);
        const userLon = parseFloat(req.query.longitude);

        const [schools] = await db.query('SELECT * FROM schools');


        const schoolsWithDistance = schools.map((school) => {

            const distance = calculateDistance(
                userLat,
                userLon,
                school.latitude,
                school.longitude
            );

            return {
                ...school,
                distance: distance
            };
        });

        schoolsWithDistance.sort((a, b) => {
            return a.distance - b.distance;
        });

        res.status(200).json({
            message: 'Schools fetched successfully',
            data: schoolsWithDistance
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            error: 'Failed to fetch schools'
        });
    }
};