import { notification1 } from "../assets";
import { notificationImages } from "../constants";

const Notification = ({ className, title }) => {
  const allNotificationImages = [notification1, ...notificationImages]; // Combine all images into one array
  const imageSize = 62; // Size of the images

  return (
    <div
      className={`${
        className || ""
      } flex items-center p-4 pr-6 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5`}
    >
      <div className="flex-1">
        <h6 className="mb-1 font-semibold text-base">{title}</h6>

        <div className="flex items-center justify-between">
          <ul className="flex -m-0.5">
            {allNotificationImages.map((item, index) => (
              <li
                key={index}
                className="flex w-[62px] h-[62px] border-2 border-n-12 rounded-xl overflow-hidden"
              >
                <img
                  src={item}
                  className="w-full h-full"
                  alt={`notification-${index}`}
                />
              </li>
            ))}
          </ul>
          <div className="body-2 text-n-13"></div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
