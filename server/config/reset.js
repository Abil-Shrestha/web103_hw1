import { pool } from './database.js'
import '../config/dotenv.js'
import creatorData from '../data/creators.js'

const createCareersTable = async () => {

    const createTableQuery = `
    DROP TABLE IF EXISTS careers;

    CREATE TABLE IF NOT EXISTS careers (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        image VARCHAR(255) NOT NULL,
        description VARCHAR(255) NOT NULL,
        submittedBy VARCHAR(255) NOT NULL,
        submittedOn VARCHAR(255) NOT NULL,
        salaryRange VARCHAR(255) NOT NULL,
        audience VARCHAR(255) NOT NULL
    )
`
    try{
        const res = await pool.query(createTableQuery)
        console.log('Careers table created successfully')
    } catch {
        console.error('Error creating table')
    }

}

const seedCareersTable = async () => {
    await createCareersTable()
    creatorData.forEach ((careers) => {

        const insertQuery = {
            text: 'INSERT INTO careers (name, image, description, submittedBy, submittedOn, salaryRange, audience) VALUES (1, 2, 3, 4, 5, 6, 7) '
          }
        const values = [
            careers.name,
            careers.image,
            careers.description,
            careers.submittedBy,
            careers.submittedOn,
            careers.salaryRange,
            careers.audience
        ]

        pool.query(insertQuery,values,(err,res) => {
            if(err) {
                console.error('Error inserting Career',err)
                return
            }

            console.log(`${careers.name} added successfully`)
        })
    })
}

seedCareersTable()