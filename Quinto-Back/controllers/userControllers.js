



const getUsers = async (req, res) => {
        try {
                const users = User.find();
                res.status(200).json(users);
        } catch (error) {
        
        }
        }