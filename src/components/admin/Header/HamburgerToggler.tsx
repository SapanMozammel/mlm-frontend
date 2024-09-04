const HamburgerToggler = (props: any) => {
	const { showSidebar, setShowSidebar } = props;
	return (
		<button
			onClick={() => setShowSidebar((state: any) => !state)}
			className="p-2 text-[#e52e71] dark:text-white rounded cursor-pointer">
			{showSidebar ? (
				<svg
					className="h-9 aspect-square"
					fill="currentColor"
					viewBox="0 0 24 24">
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M7.25007 2.38782C8.54878 2.0992 10.1243 2 12 2C13.8757 2 15.4512 2.0992 16.7499 2.38782C18.06 2.67897 19.1488 3.176 19.9864 4.01358C20.824 4.85116 21.321 5.94002 21.6122 7.25007C21.9008 8.54878 22 10.1243 22 12C22 13.8757 21.9008 15.4512 21.6122 16.7499C21.321 18.06 20.824 19.1488 19.9864 19.9864C19.1488 20.824 18.06 21.321 16.7499 21.6122C15.4512 21.9008 13.8757 22 12 22C10.1243 22 8.54878 21.9008 7.25007 21.6122C5.94002 21.321 4.85116 20.824 4.01358 19.9864C3.176 19.1488 2.67897 18.06 2.38782 16.7499C2.0992 15.4512 2 13.8757 2 12C2 10.1243 2.0992 8.54878 2.38782 7.25007C2.67897 5.94002 3.176 4.85116 4.01358 4.01358C4.85116 3.176 5.94002 2.67897 7.25007 2.38782ZM11.7071 9.70711C12.0976 9.31658 12.0976 8.68342 11.7071 8.29289C11.3166 7.90237 10.6834 7.90237 10.2929 8.29289L7.37993 11.2059C7.36486 11.2209 7.35031 11.2363 7.33627 11.252C7.12998 11.4352 7 11.7024 7 12C7 12.2976 7.12998 12.5648 7.33627 12.748C7.3503 12.7637 7.36486 12.7791 7.37993 12.7941L10.2929 15.7071C10.6834 16.0976 11.3166 16.0976 11.7071 15.7071C12.0976 15.3166 12.0976 14.6834 11.7071 14.2929L10.4142 13L16 13C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11L10.4142 11L11.7071 9.70711Z"
						fill="#e52e71"
					/>
				</svg>
			) : (
				<svg
					className="h-9 aspect-square"
					fill="currentColor"
					viewBox="0 0 24 24">
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M12.2929 14.2929C11.9024 14.6834 11.9024 15.3166 12.2929 15.7071C12.6834 16.0976 13.3166 16.0976 13.7071 15.7071L16.6201 12.7941C16.6351 12.7791 16.6497 12.7637 16.6637 12.748C16.87 12.5648 17 12.2976 17 12C17 11.7024 16.87 11.4352 16.6637 11.252C16.6497 11.2363 16.6351 11.2209 16.6201 11.2059L13.7071 8.29289C13.3166 7.90237 12.6834 7.90237 12.2929 8.29289C11.9024 8.68342 11.9024 9.31658 12.2929 9.70711L13.5858 11H8C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13H13.5858L12.2929 14.2929ZM7.25007 2.38782C8.54878 2.0992 10.1243 2 12 2C13.8757 2 15.4512 2.0992 16.7499 2.38782C18.06 2.67897 19.1488 3.176 19.9864 4.01358C20.824 4.85116 21.321 5.94002 21.6122 7.25007C21.9008 8.54878 22 10.1243 22 12C22 13.8757 21.9008 15.4512 21.6122 16.7499C21.321 18.06 20.824 19.1488 19.9864 19.9864C19.1488 20.824 18.06 21.321 16.7499 21.6122C15.4512 21.9008 13.8757 22 12 22C10.1243 22 8.54878 21.9008 7.25007 21.6122C5.94002 21.321 4.85116 20.824 4.01358 19.9864C3.176 19.1488 2.67897 18.06 2.38782 16.7499C2.0992 15.4512 2 13.8757 2 12C2 10.1243 2.0992 8.54878 2.38782 7.25007C2.67897 5.94002 3.176 4.85116 4.01358 4.01358C4.85116 3.176 5.94002 2.67897 7.25007 2.38782Z"
						fill="#e73667"
					/>
				</svg>
			)}
		</button>
	);
};

export default HamburgerToggler;
