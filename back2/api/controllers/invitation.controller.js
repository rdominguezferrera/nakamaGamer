const Invitation = require("../models/invitation.model");

const getAllInvitations = async (req, res) => {
  try {
    const invitations = await Invitation.findAll();

    if (invitations) {
      res.status(200).json(invitations);
    } else {
      res.status(404).send("invitations not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};


async function getOneInvitation(req, res) {
  try {
    const invitation = await Invitation.findByPk(req.params.id);
    if (invitation) {
      return res.status(200).json(invitation);
    } else {
      return res.status(404).send("invitation not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function addNewInvitation(req, res) {
  try {
    const invitation = await Invitation.create(req.body);
    return res
      .status(200)
      .json({ message: "invitation created", invitation: invitation });
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function updateInvitation(req, res) {
  try {
    const [invitationExist, invitation] = await Invitation.update(req.body, {
      returning: true,
      where: {
        id: req.params.id,
      },
    });
    console.log(req.params.id);
    if (invitationExist !== 0) {
      return res
        .status(200)
        .json({ message: "invitation updated", invitation: invitation });
    } else {
      return res.status(404).send("invitation not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function deleteInvitation(req, res) {
  try {
    const invitation = await Invitation.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (invitation) {
      return res.status(200).json("invitation deleted");
    } else {
      return res.status(404).send("invitation not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}



module.exports = { getAllInvitations, getOneInvitation, addNewInvitation, updateInvitation, deleteInvitation };
