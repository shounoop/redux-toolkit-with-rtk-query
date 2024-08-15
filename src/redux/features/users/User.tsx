import { useAppDispatch, useAppSelector } from '../../hooks';
import { userInfo } from './authSlice';

export function User() {
	const user = useAppSelector((state) => state.authState.user);
	const dispatch = useAppDispatch();

	console.log('user', user);

	const setUserInfo = () => {
		dispatch(
			userInfo({
				user: {
					_id: '_id',
					id: 'id',
					name: 'name',
					email: 'email',
					photo: 'photo',
					role: 'role',
					__v: 432,
				},
			})
		);
	};

	return (
		<div>
			<button onClick={setUserInfo}>set user</button>
		</div>
	);
}
