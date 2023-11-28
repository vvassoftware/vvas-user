import { useParams } from "react-router-dom";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { Marker } from "react-leaflet/Marker";
import { Popup } from "react-leaflet/Popup";

import { useSchool } from "../../actions/school";
import BackButton from "../../components/BackButton";

export default function Reservation() {
  const { id } = useParams();
  const school = useSchool(+id! as number);

  if (school.isLoading) return <div>Loading..</div>;
  if (school.isError) return <div>Something went wrong..</div>;

  return (
    <div>
      <header className="p-5">
        <BackButton title="Water Sport School" />
      </header>

      <div className="px-5 pb-3 text-darkBlue">Proof of purchase</div>

      <div className="px-5">
        <img
          src={school.data.image}
          alt=""
          className="w-full h-[200px] object-cover rounded-md"
        />
        <p className="font-medium text-darkBlue mt-3">
          Orlando, Florida
        </p>
        <p className="text-neutral-700 mt-2">
          {school.data.description}
        </p>
      </div>

      <div className="mt-5 px-5">
        <h3 className="text-[26px] font-bold text-darkBlue">
          Location
        </h3>

        <div className="mt-3">
          <MapContainer
            center={[
              school.data.coords[0].latitude,
              school.data.coords[0].longitude,
            ]}
            zoom={14}
            scrollWheelZoom={false}
            style={{ height: 300 }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
              position={[
                school.data.coords[0].latitude,
                school.data.coords[0].longitude,
              ]}
            >
              <Popup>{/* <FaMarker /> */}</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>

      <div className="mt-5 px-5">
        <h3 className="text-[26px] font-bold text-darkBlue">
          Parking
        </h3>

        <div className="mt-3 mb-5">
          <p className="text-darkBlue">{school.data.obs}</p>
        </div>
      </div>

      <div className="my-7 px-5">
        <h3 className="text-[26px] font-bold text-darkBlue">
          Contact
        </h3>

        <div className="mt-2 flex w-full items-center justify-between">
          <div className="flex items-center gap-x-3">
            <div className="w-12 h-12 bg-lightBlue rounded-full"></div>
            <div>
              <h4 className="text-sm font-bold text-darkBlue">
                {school.data.owner.name} {school.data.owner.lastname}
              </h4>
              <p className="text-sm text-darkBlue">
                {school.data.locationName}
              </p>
            </div>
          </div>

          <button className="h-[50px] w-[50px] bg-darkBlue rounded-md grid place-items-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="20" height="20" fill="#1B4965" />
              <path
                d="M13.8058 18.3325C14.0271 18.3337 14.2464 18.2909 14.4511 18.2065C14.6557 18.1221 14.8414 17.9978 14.9974 17.8408L17.2558 15.5825C17.411 15.4263 17.4981 15.2151 17.4981 14.995C17.4981 14.7748 17.411 14.5636 17.2558 14.4075L13.9224 11.0741C13.7663 10.9189 13.5551 10.8318 13.3349 10.8318C13.1148 10.8318 12.9036 10.9189 12.7474 11.0741L11.4141 12.3991C10.491 12.153 9.63602 11.6999 8.91409 11.0741C8.29002 10.3511 7.83712 9.49652 7.58909 8.57414L8.91409 7.24081C9.0693 7.08467 9.15642 6.87346 9.15642 6.65331C9.15642 6.43315 9.0693 6.22194 8.91409 6.06581L5.58076 2.73247C5.42462 2.57727 5.21341 2.49015 4.99326 2.49015C4.7731 2.49015 4.56189 2.57727 4.40576 2.73247L2.15576 4.99914C1.99878 5.15518 1.87446 5.34091 1.79005 5.54551C1.70563 5.75011 1.66281 5.96948 1.66409 6.19081C1.73969 9.39272 3.01915 12.4485 5.24742 14.7491C7.54802 16.9774 10.6038 18.2569 13.8058 18.3325ZM4.99742 4.50747L7.15576 6.66581L6.08076 7.74081C5.97894 7.83618 5.9027 7.95559 5.85902 8.08808C5.81534 8.22058 5.80562 8.36191 5.83076 8.49914C6.14223 9.89112 6.80168 11.1813 7.74742 12.2491C8.81439 13.1961 10.1049 13.8557 11.4974 14.1658C11.6326 14.1941 11.7726 14.1883 11.905 14.149C12.0374 14.1097 12.1579 14.0382 12.2558 13.9408L13.3308 12.8408L15.4891 14.9991L13.8224 16.6658C11.0589 16.5946 8.42201 15.4917 6.43076 13.5741C4.50818 11.5821 3.4021 8.94173 3.33076 6.17414L4.99742 4.50747ZM16.6641 9.16581H18.3308C18.3524 8.17497 18.1731 7.19002 17.8039 6.27031C17.4346 5.3506 16.883 4.51518 16.1822 3.81439C15.4814 3.11359 14.646 2.56195 13.7263 2.19269C12.8065 1.82342 11.8216 1.6442 10.8308 1.66581V3.33247C11.604 3.30573 12.3745 3.43832 13.0943 3.722C13.8142 4.00569 14.468 4.43441 15.0151 4.98151C15.5622 5.52861 15.9909 6.18239 16.2746 6.90223C16.5582 7.62206 16.6908 8.39255 16.6641 9.16581Z"
                fill="white"
              />
              <path
                d="M10.8359 6.66667C12.5859 6.66667 13.3359 7.41667 13.3359 9.16667H15.0026C15.0026 6.48333 13.5193 5 10.8359 5V6.66667Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
