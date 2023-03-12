import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

export default function Educations() {
	return (
		<div>
			<div class='card'>
				<div class='card-content'>
					<h6>
						<strong>EDUCATION</strong>
					</h6><br></br>
					<table class='striped'>
						<thead>
							{/* <tr>
								<th>Certificate</th>
								<th>Date</th>
								<th></th>
							</tr> */}
						</thead>
						<tbody>
							<tr>
								<td>BE. IT (75.42%) SGBAU with Distinction</td>
								<td>2016</td>
								<td>
									{/* <Link to='/details' class='btn blue lighten-2'>
										View
									</Link> */}
								</td>
							</tr>
							<tr>
								<td>H.S.C. (65.33%) Maharashtra State Board</td>
								<td>2012</td>
								<td>
									{/* <Link to='/details' class='btn blue lighten-2'>
										View
									</Link> */}
								</td>
							</tr>
							<tr>
								<td>S.S.C. (88.00%) Maharashtra State Board</td>
								<td>2010</td>
								<td>
									{/* <Link to='/details' class='btn blue lighten-2'>
										View
									</Link> */}
								</td>
							</tr>
							{/* <tr>
								<td>Other</td>
								<td>Dec 2020</td>
								<td>
									<Link to='/details' class='btn blue lighten-2'>
										View
									</Link>
								</td>
							</tr> */}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
