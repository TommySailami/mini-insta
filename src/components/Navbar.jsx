// src/components/Navbar.jsx
export default function Navbar({ title = "Mini-Insta" }) {
    return (
        < header
            style={{
                position: "sticky",
                top: 0,
                zIndex: 10,
                background: "#7a7dfd",
                borderBottom: "1px solid #eee",
                padding: "10px 16px",
            }
            }
            aria-label="app navigation"
        >
            < div
                style={{
                    maxWidth: 680,
                    margin: "0 auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 12,

                }}
            >
                < strong style={{ fontSize: 18 }}> {title}</strong >
                {/* optional placeholder actions */}
                < div style={{ display: "flex", gap: 8 }}>
                    < button aria-label="Upload" disabled >
                        &#11014; Upload
                    </button >
                    < button aria-label="Messages" disabled >
                        &#128233;
                    </button >
                </div >
            </div >
        </header >
    );
}