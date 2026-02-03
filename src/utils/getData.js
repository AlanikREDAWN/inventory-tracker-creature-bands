export async function getData() {
    const res = await fetch(
        "https://script.google.com/macros/s/AKfycbxCzkelu9cMwTOElBdOlsEI1gPZbocHE2cP15D6s79d3GcOKNZvEzvqe1Z-eVowTGB03A/exec"
    );

    const data = await res.json();
    const stringData = JSON.stringify(data, null, 2);
    const parsedData = JSON.parse(stringData);
    return parsedData;
}
