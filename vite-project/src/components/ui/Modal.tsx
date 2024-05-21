import {
	Dialog,
	DialogDescription,
	DialogPanel,
	DialogTitle,
	Transition,
	TransitionChild,
} from "@headlessui/react";
import { ReactNode } from "react";

interface Iprops {
	isOpen: boolean;
	close: () => void;
	title?: string;
	children: ReactNode;
	description?: string;
}

const Modal = ({ isOpen, close, title, children, description }: Iprops) => {
	return (
		<>
			{/* Backdrop */}
			{isOpen && (
				<div className="fixed inset-0 z-5 bg-gray-800 opacity-20 "></div>
			)}

			{/* <div className="fixed inset-0 flex items-center justify-center">
				<Button
					onClick={open}
					className="rounded-md bg-indigo-500 py-2 px-4 text-sm font-medium text-white w-fit "
				>
					Open dialog
				</Button>
			</div> */}

			<Transition appear show={isOpen}>
				<Dialog
					as="div"
					className="relative z-10 focus:outline-none"
					onClose={close}
				>
					<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4">
							<TransitionChild
								enter="ease-out duration-300"
								enterFrom="opacity-0 transform-[scale(95%)]"
								enterTo="opacity-100 transform-[scale(100%)]"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 transform-[scale(100%)]"
								leaveTo="opacity-0 transform-[scale(95%)]"
							>
								<DialogPanel className="w-full max-w-md rounded-xl bg-white p-6 ">
									{title && (
										<DialogTitle
											as="h3"
											className="text-base/7 font-medium text-black"
										>
											{title}
										</DialogTitle>
									)}
									{description && (
										<DialogDescription as="p">{description}</DialogDescription>
									)}
									<div className="mt-4">{children}</div>
								</DialogPanel>
							</TransitionChild>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
};

export default Modal;
