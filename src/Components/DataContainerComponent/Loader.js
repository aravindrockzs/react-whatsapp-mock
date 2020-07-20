import React from "react"
import ContentLoader from "react-content-loader"

const Loader = (props) => (
    <ContentLoader
        speed={2}
        width={310}
        height={700}
        viewBox="0 0 310 700"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="39" cy="41" r="29" />
        <rect x="85" y="17" rx="0" ry="0" width="230" height="20" />
        <rect x="85" y="49" rx="0" ry="0" width="83" height="17" />
        <circle cx="40" cy="126" r="29" />
        <rect x="86" y="102" rx="0" ry="0" width="230" height="20" />
        <rect x="86" y="134" rx="0" ry="0" width="83" height="17" />
        <circle cx="41" cy="211" r="29" />
        <rect x="87" y="187" rx="0" ry="0" width="230" height="20" />
        <rect x="87" y="219" rx="0" ry="0" width="83" height="17" />
        <circle cx="42" cy="296" r="29" />
        <rect x="88" y="272" rx="0" ry="0" width="230" height="20" />
        <rect x="88" y="304" rx="0" ry="0" width="83" height="17" />
        <circle cx="45" cy="384" r="29" />
        <rect x="91" y="360" rx="0" ry="0" width="230" height="20" />
        <rect x="91" y="392" rx="0" ry="0" width="83" height="17" />
        <circle cx="46" cy="469" r="29" />
        <rect x="92" y="445" rx="0" ry="0" width="230" height="20" />
        <rect x="92" y="477" rx="0" ry="0" width="83" height="17" />
        <circle cx="47" cy="554" r="29" />
        <rect x="93" y="530" rx="0" ry="0" width="230" height="20" />
        <rect x="93" y="562" rx="0" ry="0" width="83" height="17" />
        <circle cx="48" cy="639" r="29" />
        <rect x="94" y="615" rx="0" ry="0" width="230" height="20" />
        <rect x="94" y="647" rx="0" ry="0" width="83" height="17" />
        <circle cx="52" cy="803" r="29" />
        <rect x="98" y="779" rx="0" ry="0" width="230" height="20" />
        <rect x="98" y="811" rx="0" ry="0" width="83" height="17" />
    </ContentLoader>
)

export default Loader