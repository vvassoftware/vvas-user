import Layout from "../components/Layout";
import Card from "../components/Bookings/Card";

const bookings = [{}, {}, {}];

export default function Bookings() {
  return (
    <Layout>
      <header className="p-5">
        <h2 className="text-[26px] text-darkBlue font-bold">Bookings</h2>
      </header>
      <div className="flex flex-col gap-y-5 px-5 mb-5">
        {bookings.length === 0 ? (
          <div className="grid place-items-center h-[calc(100vh_-_149px_-_20px)]">
            <div className="flex flex-col items-center">
              <svg
                width="232"
                height="150"
                viewBox="0 0 232 150"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_3700_25112)">
                  <path
                    d="M211.014 149.556L204.406 129.616C204.406 129.616 211.674 136.884 211.674 142.847L210.37 129.057C210.37 129.057 214.097 134.088 213.724 141.729C213.351 149.37 211.014 149.556 211.014 149.556Z"
                    fill="#E6E6E6"
                  />
                  <path
                    d="M69.1207 131.399L62.6719 111.938C62.6719 111.938 69.7652 119.031 69.7652 124.852L68.492 111.393C68.492 111.393 72.1296 116.303 71.7658 123.76C71.4021 131.217 69.1207 131.399 69.1207 131.399Z"
                    fill="#E6E6E6"
                  />
                  <path
                    d="M169.769 140.38C169.78 153.182 144.39 149.244 113.305 149.271C82.221 149.297 57.2142 153.279 57.2031 140.477C57.1921 127.675 82.5736 124.869 113.658 124.842C144.742 124.815 169.758 127.578 169.769 140.38Z"
                    fill="#E6E6E6"
                  />
                  <path
                    d="M231.351 149.264H0V149.849H231.351V149.264Z"
                    fill="#3F3D56"
                  />
                  <path
                    d="M147.99 123.091H143.926L141.992 107.416H147.99V123.091Z"
                    fill="#A0616A"
                  />
                  <path
                    d="M140.569 121.93H148.858V126.864H136.086V126.413C136.086 125.224 136.558 124.084 137.399 123.243C138.24 122.402 139.38 121.93 140.569 121.93Z"
                    fill="#2F2E41"
                  />
                  <path
                    d="M177.857 146.226H173.793L171.859 130.551H177.857V146.226Z"
                    fill="#A0616A"
                  />
                  <path
                    d="M170.436 145.064H178.725V149.999H165.953V149.548C165.953 148.359 166.425 147.218 167.266 146.378C168.107 145.537 169.247 145.064 170.436 145.064Z"
                    fill="#2F2E41"
                  />
                  <path
                    d="M196.603 99.6594C196.884 99.3187 197.087 98.9205 197.197 98.4928C197.308 98.0652 197.323 97.6186 197.242 97.1844C197.161 96.7502 196.986 96.339 196.729 95.9798C196.472 95.6206 196.14 95.3221 195.755 95.1053L186.316 56.6562L180.281 59.2528L191.508 96.4297C191.186 97.1003 191.122 97.8655 191.327 98.5802C191.533 99.2949 191.993 99.9095 192.621 100.308C193.249 100.706 194.001 100.86 194.735 100.74C195.469 100.621 196.133 100.236 196.603 99.6594Z"
                    fill="#A0616A"
                  />
                  <path
                    d="M189.24 21.953C188.903 21.6009 188.493 21.3269 188.039 21.1503C187.585 20.9738 187.098 20.8989 186.611 20.9311C186.125 20.9633 185.652 21.1017 185.225 21.3365C184.798 21.5714 184.428 21.897 184.14 22.2905L169.531 23.9677L171.754 29.6025L185.04 27.116C185.733 27.5552 186.563 27.7249 187.372 27.593C188.182 27.4611 188.915 27.0367 189.433 26.4003C189.951 25.7639 190.217 24.9597 190.182 24.14C190.146 23.3203 189.811 22.5422 189.24 21.953Z"
                    fill="#A0616A"
                  />
                  <path
                    d="M165.164 95.6721L171.539 143.516L179.473 141.883C179.473 141.883 178.306 107.039 182.273 102.838C186.241 98.6379 177.171 91.2793 177.171 91.2793L165.164 95.6721Z"
                    fill="#2F2E41"
                  />
                  <path
                    d="M167.8 82.4932L164.872 86.886C164.872 86.886 142.322 77.515 142.322 92.4501C142.322 107.385 141.032 117.521 140.565 118.221C140.099 118.921 145.965 120.738 148.765 120.271C148.765 120.271 152.22 96.1931 151.986 94.7929C151.986 94.7929 174.106 105.638 178.307 104.705C182.507 103.771 183.5 100.467 184.2 98.6C184.9 96.7331 183.907 81.9075 183.907 81.9075L169.906 77.6348L167.8 82.4932Z"
                    fill="#2F2E41"
                  />
                  <path
                    d="M168.202 56.1189L167.367 55.1172C167.367 55.1172 158.018 34.0824 161.691 28.4063C165.364 22.7302 181.39 21.8955 181.891 22.2294C182.392 22.5633 180.695 26.8982 181.863 28.9016C181.863 28.9016 169.448 31.5932 168.614 31.9271C167.779 32.261 175.046 44.5998 175.046 44.5998L174.212 52.1122L168.202 56.1189Z"
                    fill="#CCCCCC"
                  />
                  <path
                    d="M184.56 45.7682C184.56 45.7682 175.879 46.7699 175.545 46.7699C175.211 46.7699 175.044 44.5996 175.044 44.5996L167.365 55.117C167.365 55.117 163.581 85.6294 164.583 85.1285C165.585 84.6277 184.059 87.504 184.226 86.1685C184.393 84.8329 184.059 78.1552 184.56 77.8213C185.061 77.4874 193.241 56.7865 193.241 56.7865C193.241 56.7865 192.406 52.4459 189.568 50.9435C186.73 49.441 184.56 45.7682 184.56 45.7682Z"
                    fill="#CCCCCC"
                  />
                  <path
                    d="M190.568 53.9492L193.239 56.7872C193.239 56.7872 197.207 89.3989 195.037 90.4006C192.867 91.4023 188.594 91.2792 188.594 91.2792L184.391 75.8188L190.568 53.9492Z"
                    fill="#CCCCCC"
                  />
                  <path
                    d="M176.215 43.704C180.459 43.704 183.899 40.2637 183.899 36.02C183.899 31.7762 180.459 28.3359 176.215 28.3359C171.972 28.3359 168.531 31.7762 168.531 36.02C168.531 40.2637 171.972 43.704 176.215 43.704Z"
                    fill="#A0616A"
                  />
                  <path
                    d="M174.413 37.2194C174.309 35.6249 172.298 35.5703 170.7 35.5552C169.102 35.5401 167.192 35.5972 166.288 34.2797C165.691 33.4091 165.805 32.2004 166.298 31.267C166.792 30.3335 167.604 29.6156 168.403 28.9249C170.465 27.1418 172.59 25.3728 175.066 24.2315C177.541 23.0902 180.442 22.6291 183.01 23.5452C186.164 24.6707 190.428 30.4641 190.796 33.7926C191.164 37.1211 189.834 40.5142 187.591 43.0015C185.349 45.4887 180.217 44.4852 176.987 45.37C178.951 42.591 177.656 37.5414 174.511 36.2437L174.413 37.2194Z"
                    fill="#2F2E41"
                  />
                  <path
                    d="M105.931 136.614C116.118 136.614 124.377 128.355 124.377 118.167C124.377 107.979 116.118 99.7207 105.931 99.7207C95.7431 99.7207 87.4844 107.979 87.4844 118.167C87.4844 128.355 95.7431 136.614 105.931 136.614Z"
                    fill="#1B4965"
                  />
                  <path
                    d="M93.6104 98.4083C91.0539 98.4084 88.5521 97.6676 86.4079 96.2754C84.2636 94.8832 82.5689 92.8993 81.5288 90.5639L52.2578 24.6459C51.2882 22.4623 50.7754 20.1036 50.7509 17.7145C50.7264 15.3255 51.1908 12.9567 52.1155 10.7538C53.0401 8.55083 54.4055 6.56025 56.1278 4.90441C57.8501 3.24856 59.8928 1.96244 62.1304 1.12508C64.368 0.28772 66.7532 -0.0831764 69.1394 0.0351893C71.5256 0.153555 73.8624 0.758681 76.0061 1.81337C78.1499 2.86806 80.0553 4.35003 81.6052 6.16819C83.1551 7.98635 84.3169 10.1023 85.019 12.3859L106.215 81.3263C106.821 83.2996 106.957 85.3877 106.61 87.4229C106.264 89.4581 105.445 91.3837 104.219 93.0449C102.993 94.7061 101.395 96.0567 99.5526 96.9882C97.7101 97.9197 95.6749 98.406 93.6104 98.4083Z"
                    fill="#1B4965"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3700_25112">
                    <rect width="231.351" height="150" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p className="text-darkBlue mt-2">
                You have no fun planned as of right now.
              </p>
              <button className="mt-2 bg-darkBlue w-full h-[50px] text-lg text-white font-medium rounded-md">
                Booking now
              </button>
            </div>
          </div>
        ) : (
          bookings.map((_, index: number) => <Card key={index} />)
        )}
      </div>
    </Layout>
  );
}
