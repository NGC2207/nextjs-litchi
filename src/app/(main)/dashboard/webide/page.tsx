export default function WebIDE() {
  const port = 8443;
  const host = `http://47.239.74.203:${port}`;
  return (
    <div className="h-full w-full">
      <iframe
        src={host}
        width="100%"
        height="100%"
        style={{ border: "none" }}
      ></iframe>
    </div>
  );
}
