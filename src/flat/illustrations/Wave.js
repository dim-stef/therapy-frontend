function Wave(props) {
  return (
    <svg
      className="wave"
      viewBox="0 0 1440 320"
      style={{
        position: "absolute",
        bottom: "-70px",
        zIndex: 1,
        fill:'#fff'
      }}
      {...props}
    >
      <path
        d="M0 96l48 10.7c48 10.3 144 32.3 240 32C384 139 480 117 576 96c96-21 192-43 288-26.7C960 85 1056 139 1152 144s192-37 240-58.7l48-21.3v256H0z"
      />
    </svg>
  )
}

export default Wave;

