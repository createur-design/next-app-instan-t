import { useContext } from "react";
import { useRouter } from "next/router";
import { UserContext } from "../../contexts/User";

export default function User() {
  const router = useRouter();
  const { id } = router.query;

  const { user } = useContext(UserContext);

  let isAuth = false;

  if (Number(id) === user.id) {
    isAuth = true;
  }

  return (
    <div>
      {isAuth
        ? `Il y a un user avec l'id : ${user.id} et il s'appelle ${user.name}`
        : "Vous n'êtes pas authorisé à consulter ce profil !"}
    </div>
  );
}
