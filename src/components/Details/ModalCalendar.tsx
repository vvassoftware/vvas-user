import Modal from "../../ui/Modal";
import Calendar from "../Calendar";

export default function ModalCalendar({
  showModalCalendar,
  selectedDay,
  setSelectedDay,
  setShowModalBooking,
  setShowModalCalendar,
}) {
  return (
    <Modal show={showModalCalendar} setShow={setShowModalCalendar}>
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold text-darkBlue">Calendar</h3>

        <button
          className="h-10 w-10 bg-darkBlue rounded-md grid place-items-center"
          onClick={() => setShowModalCalendar(false)}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.40799 6.00019L11.708 1.71019C11.8963 1.52188 12.0021 1.26649 12.0021 1.00019C12.0021 0.733884 11.8963 0.478489 11.708 0.290185C11.5197 0.101882 11.2643 -0.00390625 10.998 -0.00390625C10.7317 -0.00390625 10.4763 0.101882 10.288 0.290185L5.99799 4.59019L1.70799 0.290185C1.51968 0.101882 1.26429 -0.00390625 0.997986 -0.00390625C0.731684 -0.00390625 0.47629 0.101882 0.287986 0.290185C0.0996821 0.478489 -0.0061059 0.733884 -0.0061059 1.00019C-0.0061059 1.26649 0.0996821 1.52188 0.287986 1.71019L4.58799 6.00019L0.287986 10.2902C0.194257 10.3831 0.119863 10.4937 0.0690947 10.6156C0.018326 10.7375 -0.0078125 10.8682 -0.0078125 11.0002C-0.0078125 11.1322 0.018326 11.2629 0.0690947 11.3848C0.119863 11.5066 0.194257 11.6172 0.287986 11.7102C0.380949 11.8039 0.49155 11.8783 0.613409 11.9291C0.735268 11.9798 0.865974 12.006 0.997986 12.006C1.13 12.006 1.2607 11.9798 1.38256 11.9291C1.50442 11.8783 1.61502 11.8039 1.70799 11.7102L5.99799 7.41019L10.288 11.7102C10.3809 11.8039 10.4915 11.8783 10.6134 11.9291C10.7353 11.9798 10.866 12.006 10.998 12.006C11.13 12.006 11.2607 11.9798 11.3826 11.9291C11.5044 11.8783 11.615 11.8039 11.708 11.7102C11.8017 11.6172 11.8761 11.5066 11.9269 11.3848C11.9776 11.2629 12.0038 11.1322 12.0038 11.0002C12.0038 10.8682 11.9776 10.7375 11.9269 10.6156C11.8761 10.4937 11.8017 10.3831 11.708 10.2902L7.40799 6.00019Z"
              fill="white"
            />
          </svg>
        </button>
      </div>

      <div className="mt-5">
        <Calendar
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
          setShowModalBooking={setShowModalBooking}
          setShowModalCalendar={setShowModalCalendar}
        />
      </div>
    </Modal>
  );
}
