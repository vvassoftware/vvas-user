export default function Review() {
  return (
    <div className="py-5 border-b border-darkBlue/40">
      <div className="flex items-center gap-x-3">
        <div className="w-12 h-12 bg-lightBlue rounded-full"></div>
        <div>
          <h4 className="text-sm font-bold text-darkBlue">
            John Sculley
          </h4>
          <p className="text-sm text-darkBlue">September 12, 2023</p>
        </div>
      </div>

      {/* stars */}
      <div className="mt-3">
        <svg
          width="104"
          height="18"
          viewBox="0 0 104 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.0399 6.63406L11.0708 5.90408L8.84954 1.35214C8.78887 1.22751 8.68906 1.12662 8.56576 1.06529C8.25654 0.910986 7.88078 1.03957 7.72617 1.35214L5.50487 5.90408L0.535821 6.63406C0.398824 6.65384 0.273571 6.71912 0.177673 6.81803C0.0617385 6.93848 -0.00214675 7.10053 5.50841e-05 7.26856C0.00225692 7.4366 0.0703657 7.59688 0.189416 7.71418L3.78459 11.2572L2.93521 16.2602C2.91529 16.3766 2.92803 16.4963 2.97199 16.6057C3.01594 16.7151 3.08936 16.8099 3.1839 16.8793C3.27844 16.9488 3.39033 16.99 3.50688 16.9984C3.62343 17.0068 3.73997 16.982 3.8433 16.9269L8.28785 14.5648L12.7324 16.9269C12.8537 16.9922 12.9947 17.0139 13.1297 16.9902C13.4702 16.9308 13.6992 16.6044 13.6405 16.2602L12.7911 11.2572L16.3863 7.71418C16.4841 7.61724 16.5487 7.49064 16.5683 7.35216C16.6211 7.00597 16.3824 6.68549 16.0399 6.63406Z"
            fill="#1B4965"
          />
          <path
            d="M37.8055 6.63406L32.8365 5.90408L30.6152 1.35214C30.5545 1.22751 30.4547 1.12662 30.3314 1.06529C30.0222 0.910986 29.6464 1.03957 29.4918 1.35214L27.2705 5.90408L22.3014 6.63406C22.1644 6.65384 22.0392 6.71912 21.9433 6.81803C21.8274 6.93848 21.7635 7.10053 21.7657 7.26856C21.7679 7.4366 21.836 7.59688 21.955 7.71418L25.5502 11.2572L24.7008 16.2602C24.6809 16.3766 24.6937 16.4963 24.7376 16.6057C24.7816 16.7151 24.855 16.8099 24.9495 16.8793C25.0441 16.9488 25.156 16.99 25.2725 16.9984C25.3891 17.0068 25.5056 16.982 25.6089 16.9269L30.0535 14.5648L34.498 16.9269C34.6194 16.9922 34.7603 17.0139 34.8953 16.9902C35.2358 16.9308 35.4648 16.6044 35.4061 16.2602L34.5567 11.2572L38.1519 7.71418C38.2498 7.61724 38.3144 7.49064 38.3339 7.35216C38.3868 7.00597 38.148 6.68549 37.8055 6.63406Z"
            fill="#1B4965"
          />
          <path
            d="M59.5711 6.63406L54.6021 5.90408L52.3808 1.35214C52.3201 1.22751 52.2203 1.12662 52.097 1.06529C51.7878 0.910986 51.412 1.03957 51.2574 1.35214L49.0361 5.90408L44.0671 6.63406C43.9301 6.65384 43.8048 6.71912 43.7089 6.81803C43.593 6.93848 43.5291 7.10053 43.5313 7.26856C43.5335 7.4366 43.6016 7.59688 43.7207 7.71418L47.3158 11.2572L46.4665 16.2602C46.4465 16.3766 46.4593 16.4963 46.5032 16.6057C46.5472 16.7151 46.6206 16.8099 46.7151 16.8793C46.8097 16.9488 46.9216 16.99 47.0381 16.9984C47.1547 17.0068 47.2712 16.982 47.3746 16.9269L51.8191 14.5648L56.2637 16.9269C56.385 16.9922 56.5259 17.0139 56.6609 16.9902C57.0015 16.9308 57.2305 16.6044 57.1717 16.2602L56.3224 11.2572L59.9175 7.71418C60.0154 7.61724 60.08 7.49064 60.0995 7.35216C60.1524 7.00597 59.9136 6.68549 59.5711 6.63406Z"
            fill="#1B4965"
          />
          <path
            d="M81.3368 6.63406L76.3677 5.90408L74.1464 1.35214C74.0857 1.22751 73.9859 1.12662 73.8626 1.06529C73.5534 0.910986 73.1777 1.03957 73.023 1.35214L70.8017 5.90408L65.8327 6.63406C65.6957 6.65384 65.5704 6.71912 65.4745 6.81803C65.3586 6.93848 65.2947 7.10053 65.2969 7.26856C65.2991 7.4366 65.3672 7.59688 65.4863 7.71418L69.0815 11.2572L68.2321 16.2602C68.2122 16.3766 68.2249 16.4963 68.2689 16.6057C68.3128 16.7151 68.3862 16.8099 68.4808 16.8793C68.5753 16.9488 68.6872 16.99 68.8038 16.9984C68.9203 17.0068 69.0368 16.982 69.1402 16.9269L73.5847 14.5648L78.0293 16.9269C78.1506 16.9922 78.2915 17.0139 78.4266 16.9902C78.7671 16.9308 78.9961 16.6044 78.9374 16.2602L78.088 11.2572L81.6832 7.71418C81.781 7.61724 81.8456 7.49064 81.8652 7.35216C81.918 7.00597 81.6792 6.68549 81.3368 6.63406Z"
            fill="#1B4965"
          />
          <path
            d="M94.2444 1.50639C94.4977 0.831203 95.4561 0.831203 95.7101 1.50639L97.3484 6.09352C97.4632 6.39752 97.7552 6.59992 98.0813 6.59992H102.107C102.851 6.59992 103.176 7.5359 102.591 7.99429L99.7259 10.5999C99.5975 10.6996 99.5037 10.8378 99.458 10.9948C99.4122 11.1517 99.4167 11.3193 99.471 11.4734L100.517 15.9558C100.772 16.6758 99.9475 17.2942 99.3238 16.851L95.4323 14.355C95.2991 14.2603 95.1402 14.2095 94.9773 14.2095C94.8144 14.2095 94.6555 14.2603 94.5222 14.355L90.6307 16.851C90.0079 17.2942 89.1824 16.675 89.4372 15.9558L90.4835 11.4734C90.5378 11.3193 90.5424 11.1517 90.4966 10.9948C90.4508 10.8378 90.357 10.6996 90.2287 10.5999L87.3637 7.99429C86.778 7.5359 87.1041 6.59992 87.8465 6.59992H91.8725C92.031 6.60045 92.1859 6.55232 92.3168 6.4619C92.4477 6.37147 92.5483 6.24301 92.6053 6.09352L94.2436 1.50639H94.2444Z"
            stroke="#1B4965"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* body */}
      <div className="mt-[10px]">
        <p className="text-darkBlue">
          Nice service! Really enjoyed surfing for the first time,
          teacher was really helpful.
        </p>
      </div>
    </div>
  );
}
