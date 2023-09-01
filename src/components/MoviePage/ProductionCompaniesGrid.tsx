import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import React from 'react'
import { ProductionCompany } from '../types/MovieTypes'

type Props = {
	production_companies: ProductionCompany[]
}

const ProductionCompaniesGrid: React.FC<Props> = ({ production_companies }) => {
	const imgSize = 'w200'
	return (
		<>
			<h3>Production compan{production_companies.length === 1 ? 'y' : 'ies'}</h3>

			<Container fluid className='mb-3'>

				<Row className='bg-white rounded d-flex justify-content-center'>
					{production_companies.map(company => {
						return (
							<Col key={company.id} className='p-2 d-flex justify-content-center'>

								{company.logo_path ? (
									<Image src={import.meta.env.VITE_IMG_URL + imgSize + company.logo_path} style={{
										height: '3rem',
									}} />
								) :
									(<h4 className='h6 text-dark'>{company.name}</h4>)
								}
							</Col>
						)
					})}

				</Row>
			</Container>
		</>
	)
}

export default ProductionCompaniesGrid
