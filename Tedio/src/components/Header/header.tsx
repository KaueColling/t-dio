import React, { useState } from "react";

export default function Header() {
    return (
        <header className={`w-full flex `}>
            <h1>Welcome to My Website</h1>
            <select>
                <option value="Portuguese">Portuguese</option>
                <option value="German">German</option>
                <option value="English">English</option>
            </select>
        </header>
    );
}
