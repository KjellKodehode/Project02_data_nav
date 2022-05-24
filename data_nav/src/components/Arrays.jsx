const equipment01 = ["wallet", "phone", "keys"];
const equipment02 = ["revovlver", "sheriff star", "hat"];
const equipment03 = ["toothbrush", "wallet", "shoes"];

export default function Equipment() {
  return (
    <div clasName="equipment">
      <p>{equipment01[0]}</p>
      <p>{equipment01[1]}</p>
      <p>{equipment01[2]}</p>
      <br></br>
      <br></br>
      <p>{equipment02[0]}</p>
      <p>{equipment02[1]}</p>
      <p>{equipment02[2]}</p>
      <br></br>
      <br></br>
      <p>{equipment03[0]}</p>
      <p>{equipment03[1]}</p>
      <p>{equipment03[2]}</p>
    </div>
  );
}
